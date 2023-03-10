import { Flex, Title, Text, Button } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const About = () => {
  return (
    <Flex direction={"column"} justify={"center"} gap={"sm"}>
      <Title order={1}>About me</Title>
      <Text>
        A coding ninja and A software engineering sensei. I'm a recent software
        engineering bootcamp graduate with a love for all things tech. On a
        mission to build cool stuff and solve big problems, one line at a time!
        I also teach programming fundamentals! I try to help everyone discover
        their coding potential, specifically for career switchers!
      </Text>
      <Text>
        When I'm not teaching or typing away for a project, you'll catch me at
        your local tech meetup spot, looking out for new tech trends, upskilling
        myself with more programming knowledge, or in a Discord server playing a
        one-shot session of Dungeons & Dragons.
      </Text>
      <Flex direction={"row"} gap={"sm"} align={"center"}>
        <Title order={3}>Contact me:</Title>
        <Button variant={"light"} compact leftIcon={<IconBrandLinkedin />}>
          LinkedIn
        </Button>
        <Button variant={"light"} compact leftIcon={<IconBrandGithub />}>
          Github
        </Button>
      </Flex>
    </Flex>
  );
};

export default About;
