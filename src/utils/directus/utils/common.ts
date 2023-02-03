/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';
import { Filter, Sort } from '../types';

interface IReadByQueryParam<Model extends Record<string, any>> {
  sort?: Sort<Model>;
  limit?: number;
  filter?: Filter<Model>;
  fields: string;
  queryName: string;
}

class HMDirectus {
  // AxY2xnyT2dVpRbGONN12DjL2lbP-bmkW
  private _accesToken = 'JvlT05hhhPlNrVV0yuX5DyKzVEbUEk_E';

  private _client: ApolloClient<NormalizedCacheObject>;

  constructor() {
    const authLink = setContext((_, { headers }) => ({
      headers: {
        ...headers,
        authorization: this._accesToken ? `Bearer ${this._accesToken}` : ''
      }
    }));

    const link = createHttpLink({
      uri: 'https:/1qd42xii.directus.app/graphql',
      fetch
    });

    this._client = new ApolloClient({
      link: authLink.concat(link),
      cache: new InMemoryCache()
    });
  }

  /**
   * JSON.stringify without quotes on properties? @see https://stackoverflow.com/questions/11233498/json-stringify-without-quotes-on-properties
   *  */
  private _getFilter = <T extends Record<string, any>>(filter: Filter<T>) => {
    const formattedFilter = JSON.stringify(filter).replace(
      /"([^"]+)":/g,
      '$1:'
    );
    return formattedFilter;
  };

  private _getVariables = (variables: string[]) => {
    let result = '';
    variables.forEach((variable, index) => {
      if (variables.length === index + 1) {
        result = variable + result;
        return;
      }

      result = `${variable + result}, `;
    });

    return result;
  };

  readByQuery = async <T extends Record<string, any>>(
    params: IReadByQueryParam<T>
  ) => {
    try {
      const { filter, limit, sort, fields, queryName } = params;
      let variables: string[] = [];
      if (filter) {
        const serializedFilter = this._getFilter(filter);
        variables = [`filter: ${serializedFilter}`, ...variables];
      }
      if (limit) {
        variables = [`limit: ${limit}`, ...variables];
      }
      if (sort) {
        variables = [`sort: ${sort}`, ...variables];
      }

      const lowercaseName = queryName.toLocaleLowerCase();

      const stringVariable = this._getVariables(variables);

      const query = gql`
            query {
              ${
                variables.length
                  ? `${lowercaseName}(${stringVariable})`
                  : lowercaseName
              } 
                ${fields}
            }
                `;
      const res = await this._client.query<T>({
        query
      });

      const data = res.data[lowercaseName] as T[];

      return { data };
    } catch (error) {
      const {
        networkError: { result }
      } = <any>error;

      const { errors } = result;

      errors.forEach(
        (error: { message: string; extensions: Record<string, any> }) => {
          console.warn({
            message: error.message,
            code: error.extensions.code,
            graphqlErrors: error.extensions.graphqlErrors
          });
        }
      );

      return { error: errors };
    }
  };

  readSingleton = async <T extends Record<string, any>>(params: {
    queryName: string;
    fields: string;
  }) => {
    try {
      const { queryName, fields } = params;
      const lowercaseName = queryName.toLocaleLowerCase();

      const query = gql`
            query {
              ${lowercaseName} 
                ${fields}
            }
                `;
      const res = await this._client.query<T>({
        query
      });

      const data = res.data[lowercaseName] as T;
      return { data };
    } catch (error) {
      const {
        networkError: { result }
      } = <any>error;

      const { errors } = result;

      errors.forEach(
        (error: { message: string; extensions: Record<string, any> }) => {
          console.warn({
            message: error.message,
            code: error.extensions.code,
            graphqlErrors: error.extensions.graphqlErrors
          });
        }
      );

      return { error: errors };
    }
  };

  readOneByID = async <T extends Record<string, any>>(params: {
    queryName: string;
    fields: string;
    id: string;
  }) => {
    try {
      const { queryName, id, fields } = params;
      const lowercaseName = queryName.toLocaleLowerCase();

      const query = gql`
            query {
              ${`${lowercaseName}_by_id(id: ${id})`} 
                ${fields}
            }
                `;

      const res = await this._client.query<T>({
        query
      });

      const data = res.data[`${lowercaseName}_by_id`] as T;
      return { data };
    } catch (error) {
      const {
        networkError: { result }
      } = <any>error;

      const { errors } = result;

      errors.forEach(
        (error: { message: string; extensions: Record<string, any> }) => {
          console.warn({
            message: error.message,
            code: error.extensions.code,
            graphqlErrors: error.extensions.graphqlErrors
          });
        }
      );

      return { error: errors };
    }
  };
}

export const hmDirectus = new HMDirectus();
