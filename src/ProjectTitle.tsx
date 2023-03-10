import { Center, Flex, Text, Title } from "@mantine/core";

const ProjectTitle = () => {
  return (
    <Flex direction={"column"} justify={"center"} align={"center"} gap={"sm"}>
      <Title order={1}>My Works</Title>
      <Text>Stuff I previously did</Text>
    </Flex>
  );
};

export default ProjectTitle;
