import { Button, Flex, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBrandGithub } from "@tabler/icons-react";
import ProjectDetails from "./projectDetails";

const ProjectShowcase = () => {
  return (
    <Flex align={"center"} direction={"column"} h={"100%"} justify={"center"}>
      <Carousel
        mih={"50vh"}
        mx={"auto"}
        slideGap={"md"}
        slideSize={"100%"}
        w={"95%"}
        withIndicators
      >
        <Carousel.Slide>
          <ProjectDetails />
        </Carousel.Slide>
        <Carousel.Slide>
          <Flex align={"center"} justify={"center"}>
            second project
          </Flex>
        </Carousel.Slide>
      </Carousel>
      <Text>See my other projects on</Text>
      <Button
        compact
        component="a"
        target="_blank"
        href="http://www.github.com/floatingtales"
        leftIcon={<IconBrandGithub />}
        styles={{
          leftIcon: {
            marginRight: "0.15rem",
          },
        }}
        variant={"outline"}
      >
        Github
      </Button>
    </Flex>
  );
};

export default ProjectShowcase;
