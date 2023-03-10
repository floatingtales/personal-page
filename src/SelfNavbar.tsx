import { Center, Flex, Paper, Title, Text, Button } from "@mantine/core";

const SelfNavbar = () => {
  return (
    <Center h={"100%"}>
      <Paper w={"95vw"}>
        <Flex justify={"space-between"} h={"100%"} align={"center"}>
          <Title order={3}>Dillan Martin</Title>
          <Flex
            direction={"row"}
            justify={"center"}
            align={"center"}
            h={"100%"}
            gap={"sm"}
          >
            <Button>Test Button</Button>
            <Text>About</Text>
            <Text>Works</Text>
            <Text>Contact Me!</Text>
          </Flex>
        </Flex>
      </Paper>
    </Center>
  );
};

export default SelfNavbar;
