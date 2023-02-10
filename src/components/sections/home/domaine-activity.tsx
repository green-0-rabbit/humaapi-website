import styled from '@emotion/styled';
import { Box, Paper, Text, createStyles } from '@mantine/core';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import { IDataDomaineActivity } from 'src/services/home-service';
import Description from '../../modules/description';

interface IDomaineActivity {
  domaineData: IDataDomaineActivity;
}
const useStyles = createStyles((theme) => ({
  textColor: { color: theme.colorScheme === 'dark' ? 'white' : '' }
}));
const ContainDomainsActivity = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const Icon = styled.div``;
const DomaineActivity: FC<IDomaineActivity> = (props) => {
  const { classes } = useStyles();
  const { domaineData } = props;

  return (
    <Box className="flex flex-col space-y-16">
      <ContainDomainsActivity className="mx-auto text-center">
        <Text
          sx={{
            fontFamily: 'Ubuntu-Regular',
            fontWeight: 700,
            lineHeight: '28px'
          }}
          size="xl"
          color="humaapi.0"
          className="mb-1">
          {domaineData.titleDomaine}
        </Text>
        <Description
          sxdesc="px-4"
          sx={{
            fontFamily: 'Ubuntu-Bold',
            fontWeight: 700,
            lineHeight: '36px'
          }}
          size={32}
          title={domaineData.subTitle}
          content={domaineData.contentDomaine}
          space={4}
        />
      </ContainDomainsActivity>
      <ContainCards className="mt-2 flex justify-center">
        <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DataService.cardDomainData.map((el) => (
            <Paper
              key={el.text}
              radius={18}
              style={{ width: 262, height: 51 }}
              className="flex place-items-center space-x-3">
              <Icon>{el.icon}</Icon>
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
