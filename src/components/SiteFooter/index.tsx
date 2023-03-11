import { Center, Flex, Text } from "@mantine/core";

const SelfFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Center h={"100%"}>
      <Flex align={"center"} direction={"column"} justify={"center"} w={"100%"}>
        <Text size={"sm"}>
          Handcrafted by me with Vite, React.js and Mantine
        </Text>
        <Text size={"sm"}>©️ Copyright {year} - All rights Reserved</Text>
      </Flex>
    </Center>
  );
};

export default SelfFooter;
