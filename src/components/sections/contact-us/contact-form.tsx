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
const useStyles = createStyles((theme) => ({
  input: {
    backgroundColor: theme.colorScheme === 'dark' ? '#ffffff':'#f3f3f3',
    border: 'none',
    color:  'black'
  },
  description:{
    color: theme.colorScheme === 'dark' ? 'white' :"gray"
  }

}));
const ContactForm = () => {
  const ContainForm = styled.div``;
  const ContainText = styled.div``;
  const ContainGroup = styled.div``;
  const { classes } = useStyles();
  return (
    <Box className="p-8 md:p-0 font-UbuntuRegular ">
      <ContainForm className="grid place-items-center">
        <form className="grid grid-cols-1 space-y-12 w-full mt-40 md:w-[62%] xl:w-[40%] lg:w-[55%]  md:mt-52 ">
             <TextInput
            withAsterisk
            classNames={classes}
            label="Name"
            radius="md"
            variant="filled"
             style={{  height: 32 }}
          />
          <TextInput
            withAsterisk
            label="E-mail"
            classNames={classes}
            variant="filled"
            radius="md"
            style={{  height: 32 }}
          />
          <TextInput
            withAsterisk
            label="Company"
            classNames={classes}
            variant="filled"
            radius="md"
            style={{  height: 32 }}
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

        <ContainText className="mt-4 max-w-xl md:max-w-sm lg:max-w-2xl">
          <Text className={`text-left text-[12px] ${classes.description}`}>
            Please be informed that when you click the Send button Itransition
            Group will process your personal data in accordance with our Privacy
            notice for the purpose of providing you with appropriate information
          </Text>
        </ContainText>
      </ContainForm>
          <Center>
             <ContainGroup className="flex justify-between">
        <Box className="flex w-[14rem]  md:w-[29rem] ">
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
          </Center>
     
    </Box>
  );
};
export default ContactForm;
