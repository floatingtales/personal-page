import {
  Center,
  Flex,
  Header,
  Paper,
  rem,
  Title,
  Text,
  Stack,
} from "@mantine/core";

function App() {
  return (
    <>
      <Stack>
        <Header height={rem(60)}>
          <Center h={rem(60)}>
            <Paper w={"95vw"}>
              <Flex justify={"space-between"}>
                <Title order={1}>Dillan Martin</Title>
                <Center>
                  <Flex justify={"space-between"}>
                    <Text>About</Text>
                    <Text>Experience</Text>
                    <Text>Works</Text>
                    <Text>Contact Me!</Text>
                  </Flex>
                </Center>
              </Flex>
            </Paper>
          </Center>
        </Header>
        <Paper h={"100vh"}>
          <Center h={"100vh"}>
            <Stack>
              <Center>
                <Title>Hi, I'm Dillan!</Title>
              </Center>
              <Text>A coding ninja who will code for pizza!</Text>
            </Stack>
          </Center>
        </Paper>
      </Stack>
    </>
  );
}

export default App;
