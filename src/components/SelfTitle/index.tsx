import { Flex, Text, Title } from "@mantine/core";

const SelfTitle = () => {
  return (
    <Flex align={"center"} direction={"column"} gap={"sm"} justify={"center"}>
      <Title order={1}>Hi, I'm Dillan!</Title>
      <Text>A code ninja who will code for pizza!</Text>
    </Flex>
  );
};

export default SelfTitle;
