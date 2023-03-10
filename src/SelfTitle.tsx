import { Center, Flex, Text, Title } from "@mantine/core";

const SelfTitle = () => {
  return (
    <Flex direction={"column"} align={"center"} justify={"center"} gap={"sm"}>
      <Title order={1}>Hi, I'm Dillan!</Title>
      <Text>A coding ninja who will code for pizza!</Text>
    </Flex>
  );
};

export default SelfTitle;
