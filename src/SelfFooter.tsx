import { Center, Flex, Text } from "@mantine/core";
import { useRef } from "react";

const SelfFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Center h={"100%"}>
      <Flex w={"100%"} direction={"column"} align={"center"} justify={"center"}>
        <Text size={"sm"}>
          This website is created with React.js and Mantine
        </Text>
        <Text size={"sm"}>©️ Copyright {year} - All rights Reserved</Text>
      </Flex>
    </Center>
  );
};

export default SelfFooter;
