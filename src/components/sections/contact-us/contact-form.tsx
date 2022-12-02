import styled from '@emotion/styled';
import {
  Box,
  Group,
  TextInput,
  Textarea,
  Text,
  createStyles,
  Tooltip,
  Center,
} from '@mantine/core';
import BrandButton from 'src/components/elements/brand-button';
import InformationIcon from 'src/components/elements/svg/icons/information-icon';
import FieldRegex from 'src/components/features/filedRegex';
import {DynamicFields, SmartInputType} from 'react-hm-dynamic-form'
import { ReactElement, JSXElementConstructor } from 'react';
const useStyles = createStyles(() => ({
  input: {
    backgroundColor: '#f3f3f3',
    border: 'none'
  }
}));
const ContactForm = () => {
  const ContainForm = styled.div``;
  const ContainText = styled.div``;
  const ContainGroup = styled.div``;
  // const fieldsGroupMeta = [{
  //   groupName: 'first',
  //   fieldsMeta: [
  //     {
  //       inputKey: 'name',
  //       label: 'Name',
  //       inputType: 'text',
  //       options: {
  //         required: true,
  //         maxLength: { value: 15, message: 'Must be 15 characters or less' }
  //       }
  //     },
  //     {
  //       inputKey: 'email',
  //       label: 'E-mail',
  //       inputType: 'text',
  //       options: {
  //         required: true,
  //         pattern: {
  //           value: FieldRegex.email,
  //           message: 'Invalid email address'
  //         }
  //       }
  //     },
  //     {
  //       inputKey: 'company',
  //       label: 'Company',
  //       inputType: 'text',
  //       options: {
  //         required: true,
  //         maxLength: { value: 15, message: 'Must be 15 characters or less' }
  //       }
  //     },
  //     {
  //       inputKey: 'message',
  //       label: 'Message',
  //       inputType: 'text',
  //       options: {
  //         required: true,
  //       }
  //     },
  //   ]
  // }]
  const { classes } = useStyles();
  return (
    <Box className="p-8 md:p-0 font-UbuntuRegular">
      <ContainForm className="grid place-items-center">
        <form className="grid grid-cols-1 space-y-12 w-full">
        {/* <DynamicFields fieldsGroupMeta={fieldsGroupMeta as any} methods={undefined} errors={undefined} renderFields={function (params: SmartInputType<any> & { inputType: 'text' | 'select' | 'switch' | 'checkbox' | 'radio' | 'range' | 'password' | 'multiSelect'; }): ReactElement<any, string | JSXElementConstructor<any>> {
            throw new Error('Function not implemented.');
          } } renderFormControl={undefined}  /> */}
          <TextInput
            withAsterisk
            classNames={classes}
            label="Name"
            radius="md"
            className=""
            style={{ width: '100%', height: 32 }}
          />
          <TextInput
            withAsterisk
            label="E-mail"
            classNames={classes}
            variant="filled"
            radius="md"
            style={{ width: '100%', height: 32 }}
          />
          <TextInput
            withAsterisk
            label="Company"
            classNames={classes}
            variant="filled"
            radius="md"
            style={{ width: '100%', height: 32 }}
          />
          <Textarea
            withAsterisk
            label="Message"
            variant="filled"
            classNames={classes}
            radius="md"
            autosize
            minRows={6}
          />
        </form>

        <ContainText className="mt-4 max-w-xl">
          <Text className="text-left text-[12px]" color={'gray'}>
            Please be informed that when you click the Send button Itransition
            Group will process your personal data in accordance with our Privacy
            notice for the purpose of providing you with appropriate information
          </Text>
        </ContainText>
      </ContainForm>

      <ContainGroup className="flex justify-between">
        <Box className="flex justify-between">
          <Group position="right" mt="xl">
            <BrandButton
              content={'Attache file'}
              variant="outline"
              color={'gray'}
            />
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
          <BrandButton
            content={'Send'}
            style={{ width: 98, height: 39 }}
            variant="filled"
            className="btn-custom"
          />
        </Group>
      </ContainGroup>
    </Box>
  );
};
export default ContactForm;
