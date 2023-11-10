import styled from '@emotion/styled';
import { Box, createStyles, Text } from '@mantine/core';
import { FC } from 'react';
import DataService from 'src/components/content/content-data';
import Description from 'src/components/modules/description';
import { ArrayTeam } from 'src/services/about-us-service';
import Image from 'next/image';

interface IOurTeam {
  teamData: ArrayTeam;
  teamTitle: string;
}
const useStyles = createStyles((theme) => ({
  nameColor: { color: theme.colorScheme === 'dark' ? 'white' : '#2b2b2b' },
  roleColor: { color: theme.colorScheme === 'dark' ? '#afaaaa' : '#6B7280' }
}));
const Title = styled.div``;
const Icon = styled.div``;
const ContainDescription = styled.div``;
const ContainCards = styled.div``;
const Container = styled.div``;
const Ourteam = styled.div``;

const OurTeam: FC<IOurTeam> = (props) => {
  const { classes } = useStyles();
  const { teamData, teamTitle } = props;

  return (
    <Ourteam className="mx-4 mt-10 xs:mt-0">
      <ContainDescription>
        <Title className="text-center">
          <Description
            title={teamTitle}
            sx={{
              fontFamily: 'Ubuntu-Bold',
              fontWeight: 700,
              lineHeight: '36px'
            }}
            size={24}
          />
        </Title>
      </ContainDescription>
      <ContainCards className="mt-12 grid place-items-center ">
        <Box
          className="grid  grid-cols-2 gap-y-10 gap-x-16 text-center md:grid-cols-3"
          sx={{ fontFamily: 'Ubuntu-Regular' }}>
          {teamData.map((el, index) => (
            <Container
              key={el.id}
              className="grid  grid-cols-1 place-items-center">
              {/* <Icon className="h-36">{el.icon}</Icon> */}
              <Image
                src={el.image}
                alt={el.imageName}
                className="object-cover object-center"
                width={125}
                height={125}
              />
              <Text
                className={`${classes.nameColor} mt-2 text-base font-semibold`}
                sx={{ fontFamily: 'Ubuntu-Regular' }}>
                {el.title}
              </Text>
              <Text
                className={`${classes.roleColor} text-sm font-medium`}
                sx={{ fontFamily: 'Ubuntu-Regular' }}
                dangerouslySetInnerHTML={{ __html: el.description }}
              />
            </Container>
          ))}
        </Box>
      </ContainCards>
    </Ourteam>
  );
};
export default OurTeam;
