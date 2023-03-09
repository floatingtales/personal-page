import { Center, Flex, Text } from "@mantine/core";
import { useRef } from "react";

const SelfFooter = () => {
  const year = useRef(new Date());
  return (
    <Center h={"100%"}>
      <Flex w={"100%"} direction={"column"} align={"center"} justify={"center"}>
        <Text size={"sm"}>
          This website is created with React.js and Mantine
        </Text>
        <Text size={"sm"}>
          ©️ Copyright {year.current.getFullYear()} - All rights Reserved
        </Text>
      </Flex>
    </Center>
  );
};

export default SelfFooter;
