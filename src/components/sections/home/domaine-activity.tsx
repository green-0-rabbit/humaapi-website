import styled from '@emotion/styled';
import { Box, Paper, Text, createStyles } from '@mantine/core';
import DataService from 'src/components/content/content-data';
import Description from '../../modules/description';

const useStyles = createStyles((theme) => ({
  textColor: { color: theme.colorScheme === 'dark' ? 'white' : '' }
}));
const ContainDomainsActivity = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const Icon = styled.div``;
const DomaineActivity = () => {
  const { classes } = useStyles();

  return (
    <Box className="flex flex-col space-y-16">
      <ContainDomainsActivity className="text-center mx-auto">
        <Text
          sx={{
            fontFamily: 'Ubuntu-Regular',
            fontWeight: 700,
            lineHeight: '28px'
          }}
          size="xl"
          color="#EA6F66"
          className="mb-2">
          Domains activity
        </Text>
        <Description
          sx={{
            fontFamily: 'Ubuntu-Bold',
            fontWeight: 700,
            lineHeight: '36px'
          }}
          size={32}
          title="Industries we serve"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          space={4}
        />
      </ContainDomainsActivity>
      <ContainCards className="flex justify-center mt-2">
        <Container className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
          {DataService.cardDomainData.map((el) => (
            <Paper
              key={el.text}
              radius={18}
              style={{ width: 262, height: 51 }}
              className="flex place-items-center space-x-3">
              <Icon className="">{el.icon}</Icon>
              <Text
                className={`${classes.textColor}`}
                sx={{ fontFamily: 'Ubuntu-Regular' }}>
                {el.text}
              </Text>
            </Paper>
          ))}
        </Container>
      </ContainCards>
    </Box>
  );
};
export default DomaineActivity;
