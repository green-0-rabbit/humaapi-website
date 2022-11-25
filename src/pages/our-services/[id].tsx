import styled from '@emotion/styled';
import { Carousel } from '@mantine/carousel';
import { Box, Text } from '@mantine/core';
import Router from 'next/router';
import { FC } from 'react';
import Card from 'src/components/elements/card';
import DeployementIcon from 'src/components/elements/illustrations/logo-icon/deployment-icon';
import DevelopementIcon from 'src/components/elements/illustrations/logo-icon/developement-icon';
import GatheringIcon from 'src/components/elements/illustrations/logo-icon/gathering-icon';
import QualityAssuranceIcon from 'src/components/elements/illustrations/logo-icon/quality-assurance-icon';
import UxUiIcon from 'src/components/elements/illustrations/logo-icon/ux-ui-icon';
import TemplateCarousel from 'src/components/modules/carousel';
import Description from 'src/components/modules/description';
import HearderBanner from 'src/components/sections/hearder-banner';
import DataService from 'src/components/sections/our-services-section/data-service';



interface ILandingPage {}

const IdOutService: FC<ILandingPage> = () => {
  const HearderBannerContain = styled.div``;
  const ContainService = styled.div``;
  const Title = styled.div``;
  const ContainDescription = styled.div``;
  const ContainCards = styled.div``;
  const Container = styled.div``;
  const Contain = styled.div``;
  const Numero = styled.div``;
  const FirstContent = styled.div``;
  const SecondContent = styled.div``;
  const TitleCard = styled.div``;
  const Icon = styled.div``;
  const tableServiceget = [
    {
      text: 'We develop your own, custom project - one & only',
      title: 'Custom development'
    },
    {
      text: 'Development of look & feel of your app on various devices',
      title: 'Mobile developement'
    },
    {
      text: 'Assurance to make sure that everything will work as planned',
      title: 'Quality assurance'
    },
    {
      text: 'Development of the backbone of your product',
      title: 'Backend development'
    },
    {
      text: 'Intuitive UX & breathtaking UI dedicated for mobile',
      title: 'UI & UX Design'
    }
  ];
  const tableServicefollow = [
    {
      icon: <GatheringIcon />,
      text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
      title: 'Requirement Gathering'
    },
    {
      icon: <UxUiIcon />,
      text: 'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.',
      title: 'Custom development'
    },
    {
      icon: <DevelopementIcon />,
      text: 'After designing, you will get your prototype, which will be sent ahead for the development process for the product.',
      title: 'Custom development'
    },
    {
      icon: <QualityAssuranceIcon />,
      text: 'Hyperlink values quality and provides 100% bug free application with no compromisation in it.e develop your own, custom project - one & only',
      title: 'Custom development'
    },
    {
      icon: <DeployementIcon />,
      text: 'We develop your own, custom project - one & only',
      title: 'Custom development'
    }
  ];
  const route = Router;
  const getService = () => {
    const { id } = Router.query;
    const checkId = DataService.find(
      (el: { id: string; data: JSX.Element }) => el.id === id
    );
    return checkId?.data;
  };
  const children = getService();

  return (
    <ContainService className="space-y-32 md:space-y-52">
      <HearderBanner size="h-[80vh] md:h-[55vh]">
        <HearderBannerContain className="h-screen md:h-[70vh]  grid place-items-center p-5">
          {children}
        </HearderBannerContain>
      </HearderBanner>
      <FirstContent className='mx-4'>
        <ContainDescription>
          <Title className="text-center">
            <Description
              title={'What your get'}
              content={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              }
              classe={'description-title leading-9 font-bold text-[24px]'}
              space={1}
            />
          </Title>
        </ContainDescription>
        <ContainCards className="grid place-items-center mt-12">
          <Container className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {tableServiceget.map((el, index) => (
              <Card
                className="md:grid place-items-center "
                key={index}
                p={14}
                radius={24}
                style={{ width: 296, height: 96 }}>
                <Contain className="flex font-UbuntuRegular">
                  <Numero className="w-8 font-bold text-hm text-base">
                    0{index + 1}
                  </Numero>

                  <Box className="flex flex-col">
                    <TitleCard className="text-base font-semibold text-[#2b2b2b]">
                      {el.title}
                    </TitleCard>
                    <Text className="text-xs text-gray-500 font-medium mt-1">
                      {el.text}
                    </Text>
                  </Box>
                </Contain>
              </Card>
            ))}
          </Container>
        </ContainCards>
      </FirstContent>

      <SecondContent className='mx-4'>
        <ContainDescription>
          <Title className="text-center">
            <Description
              title={'Process we follow'}
              content={
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              }
              classe={'description-title leading-9 font-bold text-[24px]'}
              space={1}
            />
          </Title>
        </ContainDescription>
        <ContainCards className="grid place-items-center mt-12">
          <Container className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {tableServicefollow.map((el, index) => (
              <Card
                radius={20}
                className="hidden md:grid place-items-start"
                key={index}
                style={{ width: 280, height: 173 }}>
                <Contain className="grid gap-1 grid-cols-1 font-UbuntuRegular ">
                  <Icon>{el.icon}</Icon>
                  <TitleCard className="text-base font-semibold text-[#2b2b2b]">
                    {el.title}
                  </TitleCard>
                  <Text
                    className=" text-xs text-gray-500  font-medium mt-1"
                    lineClamp={4}>
                    {el.text}
                  </Text>
                </Contain>
              </Card>
            ))}
          </Container>
        </ContainCards>
        <TemplateCarousel  classeCarrousel={'block md:hidden grid'}>
        {tableServicefollow.map((el, index) => (
          <Carousel.Slide>
            <Card
                radius={20}
                className="grid place-items-start"
                key={index}
                style={{ width: 280, height: 173 }}>
                <Contain className="grid gap-1 grid-cols-1 font-UbuntuRegular ">
                  <Icon>{el.icon}</Icon>
                  <TitleCard className="text-base font-semibold text-[#2b2b2b]">
                    {el.title}
                  </TitleCard>
                  <Text
                    className=" text-xs text-gray-500  font-medium mt-1"
                    lineClamp={4}>
                    {el.text}
                  </Text>
                </Contain>
              </Card>
          </Carousel.Slide>
              
            ))}
        </TemplateCarousel>
      </SecondContent>
    </ContainService>
  );
};
export default IdOutService;