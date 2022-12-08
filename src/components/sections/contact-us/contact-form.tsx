import styled from '@emotion/styled';
import {
  Box,
  Group,
  Text,
  createStyles,
  Tooltip,
  Center,
  Button,
  FileButton
} from '@mantine/core';
import { useState } from 'react';
import { fieldRegex } from 'react-hm-dynamic-form';
import { useForm } from 'react-hook-form';
import InformationIcon from 'src/components/elements/svg/icons/information-icon';
import {
  IFieldGroupMetaFlex,
  ReactiveFormFlex
} from 'src/components/molecules';
const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colorScheme === 'dark' ? '#ffffff' : '#f3f3f3',
    border: 'none',
    color: 'black'
  },
  description: {
    color: theme.colorScheme === 'dark' ? 'white' : 'gray'
  }
}));


export interface ISignInInput {
  name: string;
  email: string;
  company: string;
  message: string;
}
const defaultValues: ISignInInput = {
  name: '',
  company: '',
  email: '',
  message: ''
};

const ContainForm = styled.div``;
const ContainText = styled.div``;
const ContainGroup = styled.div``;
const ContactForm = () => {
  const { classes } = useStyles();
  const { handleSubmit, ...methods } = useForm<ISignInInput>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues
  });
  const {
    formState: { errors }
  } = methods;
  const [files, setFiles] =  useState<File[]>([]);

  const fieldsGroupMeta: IFieldGroupMetaFlex<ISignInInput>[] = [
    {
      groupName: '',
      fieldsMeta: [
        {
          inputKey: 'name',
          label: 'Name',
          inputType: 'text',
          options: {
            required: { value: true, message: 'Name is required' }
          }
        },
        {
          inputKey: 'email',
          label: 'Email',
          inputType: 'text',
          options: {
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: fieldRegex.email,
              message: 'please provide a valid email'
            }
          }
        },

        {
          inputKey: 'company',
          label: 'Company',
          inputType: 'text',
          options: {
            required: { value: true, message: 'Company name is required' }
          }
        },
        {
          inputKey: 'message',
          label: 'Message',
          inputType: 'textarea',
          options: {
            required: { value: true, message: 'Message is required' }
          },
          customProps: {
            autosize: true,
            minRows: 5,
            maxRows: 10
          }
        }
      ]
    }
  ];
  return (
    <Box className="p-8 md:p-0 font-UbuntuRegular ">
      <ContainForm className="grid place-items-center">
        <Box
          className="grid gap-2 grid-cols-1 w-full mt-40 md:w-[62%] xl:w-[40%] lg:w-[55%]  md:mt-52 "
          component="form"
             >
          <ReactiveFormFlex
            methods={methods}
            errors={errors}
            fieldsGroupMeta={fieldsGroupMeta}
          />

          <ContainText className="max-w-xl md:max-w-lg lg:max-w-3xl">
            <Text className={`text-left text-[12px] ${classes.description}`}>
              Please be informed that when you click the Send button Itransition
              Group will process your personal data in accordance with our
              Privacy notice for the purpose of providing you with appropriate
              information
            </Text>
          </ContainText>

          <ContainGroup className="flex justify-between">
            <Box className="flex">
              <Group position="right" mt="xl">
              <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => <Button  variant="outline" color={'gray'} {...props}>
                  Attach file  {files?.length ? files?.length : ''}
                </Button>}
        </FileButton>
                
              </Group>
              <Group position="right" mt="xl" className="w-8 relative">
                <Tooltip
                  label="Upload your document. Max file is 10mo"
                  color={'#a7a7a7'}
                  radius={8}
                  offset={12}
                  position="right"
                  withArrow
                  transition="pop">
                  <Center sx={{ cursor: 'help' }}>
                    <InformationIcon />
                  </Center>
                </Tooltip>
              </Group>
            </Box>
            <Group position="left" mt="xl">
              <Button
                onClick={handleSubmit(() => {
                  const formval = methods.getValues();
                  console.log(formval);
                  let form = {};
                  // Object.keys(formval).forEach((el)=>  Object.assign(form,{`${el}: ${formval[el].trim()}`}))
                  //   for (const key in formval) {
                  //     form = {...form,{`${key}: ${formval[key].trim()}`}}

                  // }
                  // console.log(formval);
                })}
                style={{ width: 98, height: 39 }}
                variant="filled"
                className="btn-custom">
                Send
              </Button>
            </Group>
          </ContainGroup>
        </Box>
      </ContainForm>
    </Box>
  );
};
export default ContactForm;
