import styled from '@emotion/styled';
import { Button, createStyles, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import { fieldRegex } from 'react-hm-dynamic-form';
import { useForm } from 'react-hook-form';
import ReactiveReCaptcha from 'src/components/molecules/recaptcha/recaptcha';
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
  domaine: string;
  message: string;
  acceptCondition: boolean;
  captchaToken: string;
  recaptchaCheckbox: boolean;
}
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
const Form = styled.form;
const ContactForm = () => {
  const { classes } = useStyles();
  const [isDisabled, setIsDisabled] = useState(false);
  const { handleSubmit, ...methods } = useForm<ISignInInput>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues
  });
  const {
    formState: { errors, isValid }
  } = methods;

  useEffect(() => {
    // console.log('state', methods.formState.isValid);
  }, []);

  console.log(isValid);

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
          inputKey: 'recaptchaCheckbox',
          label: '',
          inputType: 'recaptcha',
          // options: {
          //   required: { value: true, message: '' }
          // },
          customProps: {}
        }
      ]
    }
  ];
  const onSubmit = (data: ISignInInput) => {
    const { recaptchaCheckbox, ...rest } = data;
    const trimedData = Object.entries(rest).map(([key, value]) =>
      typeof value === 'string' ? [key, value.trim()] : [key, value]
    );
    const newData = Object.fromEntries(trimedData);
    // methods.reset();

    return newData;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center h-screen max-w-2xl mx-auto">
      <ReactiveFormFlex
        methods={methods}
        errors={errors}
        fieldsGroupMeta={fieldsGroupMeta}
      />

      {/* <ReactiveReCaptcha
        fieldKey="captchaToken"
        disabled={isDisabled}
        methods={methods}
        error={errors.recaptchaCheckbox}
      /> */}
      <ContainText className="max-w-xl md:max-w-lg lg:max-w-3xl">
        <Text className={`text-left text-[12px] ${classes.description}`}>
          Please be informed that when you click the Send button Itransition
          Group will process your personal data in accordance with our Privacy
          notice for the purpose of providing you with appropriate information
        </Text>
      </ContainText>
      <Button
        type="submit"
        // disabled={!methods.formState.isValid}
        style={{ width: 'full', height: 39 }}
        variant="filled"
        className="btn-custom mt-8">
        Send
      </Button>
    </form>
  );
};
export default ContactForm;
