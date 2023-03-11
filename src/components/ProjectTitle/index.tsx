import { Flex, Text, Title } from "@mantine/core";

const ProjectTitle = () => {
  return (
    <Flex align={"center"} direction={"column"} gap={"sm"} justify={"center"}>
      <Title order={1}>Projects</Title>
      <Text>AKA. Stuff I made</Text>
    </Flex>
  );
};

export default ProjectTitle;
