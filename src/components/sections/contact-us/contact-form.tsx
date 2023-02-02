/* eslint-disable import/no-named-as-default */
import styled from '@emotion/styled';
import { Button, createStyles, Text } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';
import { fieldRegex } from 'react-hm-dynamic-form';
import { useForm } from 'react-hook-form';
import customNotification from 'src/components/features/notification';
import {
  IFieldGroupMetaFlex,
  ReactiveFormFlex
} from 'src/components/molecules';
import contactService from 'src/services/contact-service';
import navigation from 'src/components/features/navigation-hook';
import Link from 'next/link';

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
  domaine: string;
  message: string;
  acceptCondition: boolean;
  captchaToken: string;
  recaptchaCheckbox: boolean;
}
// const getStorageValue = localStorage.getItem('message')
//   ? localStorage.getItem('message')
//   : '';
// console.log(getStorageValue);

const defaultValues: ISignInInput = {
  name: '',
  company: '',
  email: '',
  domaine: '',
  message: '',
  acceptCondition: false,
  captchaToken: '',
  recaptchaCheckbox: false
};

const ContainText = styled.div``;
const Form = styled.form``;

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
          inputKey: 'domaine',
          label: 'Domaine',
          inputType: 'select',
          customProps: {
            placeHolder: 'Choose your domaine',
            options: [
              'Web developpement',
              'Mobile developpement',
              'Design',
              'DevOps'
            ]
          },
          options: {
            required: { value: true, message: 'Topic is required' }
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
        },
        {
          inputKey: 'acceptCondition',
          label: 'I agree and accept the terms and conditions',
          inputType: 'checkbox',
          labelDirection: 'right',
          options: {
            required: { value: true, message: '' }
          }
        },
        {
          inputKey: 'captchaToken',
          label: '',
          inputType: 'recaptcha',
          options: {
            required: { value: true, message: '' }
          }
        }
      ]
    }
  ];
  const onSubmit = async (data: ISignInInput) => {
    const { acceptCondition, recaptchaCheckbox, ...rest } = data;
    const trimedData = Object.entries(rest).map(([key, value]) =>
      typeof value === 'string' ? [key, value.trim()] : [key, value]
    );
    const newData = Object.fromEntries(trimedData);
    const newDataValue = { acceptCondition, recaptchaCheckbox, ...newData };
    if (methods.formState.isValid) {
      const sendResult = await contactService.sendMail(newDataValue);
      if (sendResult) {
        customNotification({
          title: 'Thank you for your request',
          message: 'Your request has been sent successfully',
          autoClose: 3000,
          radius: 16,
          color: 'green',
          icon: <IconCheck size={16} />
        });
        methods.reset(defaultValues);
        navigation('/');
      }
    }
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-screen max-w-2xl mx-auto px-5 mt-8">
      <ReactiveFormFlex
        methods={methods}
        errors={errors}
        fieldsGroupMeta={fieldsGroupMeta}
      />
      <ContainText className="max-w-xl md:max-w-lg lg:max-w-3xl">
        <Text className={`text-left text-[12px] ${classes.description}`}>
          I agree to the processing of my personal data and accept the terms of
          <span className="text-red-200 cursor-pointer">
            <Link href="cookie-policy"> privacy policy .</Link>
          </span>
        </Text>
      </ContainText>
      <Button
        type="submit"
        disabled={!methods.formState.isValid}
        style={{ width: 'full', height: 39 }}
        variant="filled"
        className="btn-custom mt-8">
        Send
      </Button>
    </Form>
  );
};
export default ContactForm;
