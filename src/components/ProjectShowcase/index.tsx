import { Button, Flex, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBrandGithub } from "@tabler/icons-react";
import ProjectDetails from "./projectDetails";
import projectArr from "./projects.json";

const ProjectShowcase = () => {
  return (
    <Flex
      align={"center"}
      direction={"column"}
      gap={"sm"}
      h={"100%"}
      justify={"center"}
    >
      <Carousel
        mih={"50vh"}
        mx={"auto"}
        slideGap={"md"}
        slideSize={"100%"}
        w={"95%"}
        withIndicators
      >
        {projectArr.map((project) => (
          <Carousel.Slide key={project.projTitle}>
            <ProjectDetails
              bgColor={project.bgColor}
              imgSource={project.imgSource}
              projTitle={project.projTitle}
              projDesc={project.projDesc}
              stackList={project.stackList}
              linkList={project.linkList}
            />
          </Carousel.Slide>
        ))}
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
