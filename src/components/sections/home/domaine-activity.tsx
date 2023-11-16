import styled from '@emotion/styled';
import { Box, Paper, Text, createStyles } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';
import { IDomaineNodeType, IDomaineActivity } from 'src/services/home-service';
import Description from '../../modules/description';

interface IDtaDomaineActivity {
  domaineData: IDomaineActivity;
  domaineNodeData: IDomaineNodeType[];
}
const useStyles = createStyles((theme) => ({
  textColor: { color: theme.colorScheme === 'dark' ? 'white' : '' }
}));
const ContainDomainsActivity = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const DomaineActivity: FC<IDtaDomaineActivity> = (props) => {
  const { classes } = useStyles();
  const { domaineData, domaineNodeData } = props;

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
          {domaineData.title}
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
          content={domaineData.description}
          space={4}
        />
      </ContainDomainsActivity>
      <ContainCards className="mt-2 flex justify-center">
        <Container className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {domaineNodeData.map((el) => (
            <Paper
              key={el.id}
              radius={18}
              style={{ width: 262, height: 51 }}
              className="flex place-items-center space-x-3">
              <Image
                src={el.image}
                alt={el.imageName}
                className=" object-cover object-center"
                height={24}
                width={24}
              />
              <Text
                className={`${classes.textColor}`}
                sx={{ fontFamily: 'Ubuntu-Regular' }}>
                {el.title}
              </Text>
            </Paper>
          ))}
        </Container>
      </ContainCards>
    </Box>
  );
};
export default DomaineActivity;
