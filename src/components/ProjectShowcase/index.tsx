import { Button, Flex, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { IconBrandGithub } from "@tabler/icons-react";
import ProjectDetails from "./projectDetails";
import projectArr from "./projects.json";
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from "embla-carousel-react";

const ProjectShowcase = () => {
  const autoplay = Autoplay({ delay: 4000 });
  return (
    <Flex
      align={"center"}
      direction={"column"}
      gap={"sm"}
      h={"100%"}
      justify={"center"}
    >
      <Carousel
        loop
        mih={"50vh"}
        mx={"auto"}
        onMouseEnter={autoplay.stop}
        onMouseLeave={autoplay.reset}
        plugins={[autoplay as unknown as EmblaPluginType]}
        slideGap={"md"}
        slideSize={"100%"}
        w={"95%"}
        withControls={false}
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
      <Text italic>psst, this showcase is slidable</Text>
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
