/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import commander, { Command } from 'commander';

import { buildClientSchema, getIntrospectionQuery, printSchema } from 'graphql';

import axios from 'axios';

import * as fs from 'fs/promises';

import ora from 'ora';

import * as path from 'path';

// ############### CONFIG PART START ###############
const program = new Command();

// @see https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const yellow = '\x1b[33m%s\x1b[0m';

const blue = '\x1b[34m';

const graphqlGeneratedWarning = `
# ------------------------------------------------------
# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
# ------------------------------------------------------
`;

type BaseError = {
  code: string;

  message: string;

  errno: number;

  syscall: string;
} & unknown;

type Data = Parameters<typeof fs.writeFile>[1];

type Options = Parameters<typeof fs.writeFile>[2];

export const response = <T>(data: T) => ({
  data,

  error: undefined
});

const errorResponse = <T>(error: T) => ({
  data: undefined,

  error
});

const options: Options = {
  encoding: 'utf8',

  flag: 'w', // https://nodejs.org/api/fs.html#file-system-flags
  mode: 0o666 // File Accessibility => https://betterprogramming.pub/node-js-fs-module-check-file-accessibility-appending-data-and-changing-permissions-dbce0f2b373c
};

const writeFile = async (pathWriteFile: string, data: Data) => {
  try {
    await fs.writeFile(pathWriteFile, data, options);

    console.log(blue, `${pathWriteFile} have been updated`);

    const Responsedata = { done: true };

    return response(Responsedata);
  } catch (err) {
    return errorResponse(<BaseError>err);
  }
};

const createDir = async (pathWriteFile: string) => {
  try {
    await fs.mkdir(pathWriteFile, { recursive: true });

    const data = { done: true };

    console.log(blue, `${pathWriteFile} was created`);

    return response(data);
  } catch (err) {
    return errorResponse(<BaseError>err);

    // throw new Error(err);
  }
};

const removeFileOrDir = async (pathWriteFile: string) => {
  try {
    await fs.rm(pathWriteFile, { recursive: true, force: true });

    const data = { done: true };

    // console.log("file or dir have been removed");
    return response(data);
  } catch (err) {
    return errorResponse(<BaseError>err);
  }
};

const myParseInt = (value: any) => {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10);

  if (Number.isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.');
  }

  return parsedValue;
};

/**
 *
 * @see https://github.com/nestjs/graphql/issues/679#issuecomment-738664735
 * @see other https://github.com/Skitionek/gql-generator-node
 * @see in cli https://github.com/timqian/gql-generator
 */
const getSchemaFromUrl = async (url: string) => {
  try {
    const query = getIntrospectionQuery().toString();

    const responsePost = await axios.post(url, { query });

    const {
      data: { data }
    } = responsePost;

    return buildClientSchema(data);
  } catch (error) {
    const err = <any>error;
    let message;

    if (err.code === 'ECONNREFUSED') {
      message =
        'your url is not reachable, please check if the server is online';

      console.log('\x1b[31m', message);
    }

    throw Error(err.message);
  }
};

//  ############### CONFIG PART END ###############
const main = async (params: { schemaUrl: string; limit: number }) => {
  const { schemaUrl, limit } = params;

  const schema = await getSchemaFromUrl(schemaUrl);

  // const operationsDictionary = {
  //   query: { ...(schema.getQueryType()?.getFields() ?? {}) },

  //   mutation: { ...(schema.getMutationType()?.getFields() ?? {}) },

  //   subscription: { ...(schema.getSubscriptionType()?.getFields() ?? {}) }
  // };

  const graphqlString = {
    query: '',

    mutation: '',

    subscription: ''
  };

  const documentString = ``;

  const graphqlSchema = printSchema(schema);

  // for (const [operationKind, operationValue] of Object.entries(
  //   operationsDictionary
  // )) {
  //   documentString = '';

  //   for (const operationName of Object.keys(operationValue)) {
  //     const operationAST = buildOperationNodeForField({
  //       schema,

  //       kind: operationKind as OperationTypeNode,

  //       field: operationName,

  //       depthLimit: limit
  //     });

  //     if (operationAST.name) {
  //       const value = operationAST.name.value.split('_')[0];

  //       const { kind, loc } = operationAST.name;

  //       const newOperationAst = {
  //         ...operationAST,

  //         name: {
  //           value,

  //           kind,

  //           loc
  //         }
  //       };

  //       documentString += `${print(newOperationAst)}\n`;
  //     }
  //   }

  //   graphqlString[operationKind as OperationTypeNode] = documentString;
  // }

  if (!graphqlSchema) throw new Error('the graphql schema is empty');

  const dirPath = path.join(process.cwd(), 'graphql');

  const resRemoveFileOrDir = await removeFileOrDir(dirPath);

  if (resRemoveFileOrDir.error) {
    throw Error(resRemoveFileOrDir.error.message);
  }

  const resCreateDir = await createDir(dirPath);

  if (resCreateDir.error) {
    throw Error(resCreateDir.error.message);
  }

  // ##### graphql schema Start #####
  const schemaPath = path.join(dirPath, 'schema.graphql');

  const resWriteFileSchema = await writeFile(
    schemaPath,

    `${graphqlGeneratedWarning}\n\n${graphqlSchema}`
  );

  // ##### graphql schema End #####
  if (resWriteFileSchema.error) {
    throw Error(resWriteFileSchema.error.message);
  }

  // ##### operations schema Start #####
  for (const [key, value] of Object.entries(graphqlString)) {
    if (!value) continue;

    const operationPath = path.join(
      process.cwd(),

      'graphql',

      `${key === 'query' ? 'queries' : `${key}s`}.graphql`
    );

    const resWriteFile = await writeFile(
      operationPath,

      `${graphqlGeneratedWarning}\n\n${value}`
    );

    if (resWriteFile.error) {
      throw Error(resWriteFile.error.message);
    }
  }

  // ##### operations schema End #####
  // return parse(documentString);
};

const generate = async () => {
  program
    .command('generate')
    .argument('<url>', 'graphql API url') // --path=src/hooks or -p src/hooks
    .option('-l, --limit <number>', 'operations depthLimit', myParseInt, 2)
    .description(
      'generate schema.graphql and operations (queries, mutations...)'
    )

    .action(async (schemaUrl: string, options: { limit: number }) => {
      const { limit } = options;

      console.log(limit);

      const urlRegex = /^https?:\/\/.*\/graphql$/g;

      if (schemaUrl.match(urlRegex)) {
        try {
          await main({ schemaUrl, limit });
        } catch (err: any) {
          console.warn({ err, message: err.message });
        }
      } else {
        console.warn(
          yellow,

          'url is not valid, please provide a valid graphql URL'
        );
      }
    });
};

const bootstrap = async () => {
  try {
    const spinner = ora('Processing graphql schema').start();

    await generate();

    await program.parseAsync();

    spinner.text = 'graphql files generated';

    spinner.succeed();
  } catch (error) {
    const err = <any>error;
    console.log({ err, message: err.message });
  }
};

bootstrap();
