import styled from '@emotion/styled';
import { Box, Paper, Text } from '@mantine/core';
import DataService from 'src/components/content/content-data';
import Description from '../../modules/description';
import { createStyles } from '@mantine/core';
const useStyles = createStyles((theme) => ({
  
  textColor:{color: theme.colorScheme === 'dark' ? "white" :""}
  
}))
const ContainDomainsActivity = styled.div``;
  const ContainCards = styled.div``;
  const Container = styled.div``;
  const Icon = styled.div``;
const DomaineActivity = () => {
  
  const { classes} = useStyles();

  return (
    <Box className={`grid gap-6 md:gap-12`}>
      <ContainDomainsActivity className="text-center mx-4">
        <Text
          color={'#EA6F66'}
          className="text-xl font-UbuntuRegular font-bold
          mb-2">
          Domains activity
        </Text>
        <Description
          title={'Industries we serve'}
          content={
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
          classe={'common-description-home'}
          space={1}
        />
      </ContainDomainsActivity>
      <ContainCards className="grid place-items-center mt-2">
        <Container className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {DataService.cardDomainData.map((el) => (
            <Paper
                key={el.text}
              radius={18}
              style={{ width: 262, height: 51 }} 
              className={'flex place-items-center space-x-3'}>
              <Icon className="">{el.icon}</Icon>
              <Text className={`${classes.textColor} font-UbuntuRegular`}>{el.text}</Text>
            </Paper>
          ))}
        </Container>
      </ContainCards>
    </Box>
  );
};
export default DomaineActivity;
