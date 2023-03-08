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
                <Title order={3}>Dillan Martin</Title>
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
          <Center mih={"100vh"}>
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify={"space-between"}
            >
              <Center h={"100vh"}>
                <Paper w={"49vw"}>
                  <Stack>
                    <Center>
                      <Title>Hi, I'm Dillan!</Title>
                    </Center>
                    <Center>
                      <Text>A coding ninja who will code for pizza!</Text>
                    </Center>
                  </Stack>
                </Paper>
              </Center>
              <Center>
                <Paper w={"49vw"}>
                  <Center>
                    <Stack>
                      <Title>About me</Title>
                      <Text>
                        A recent software engineering bootcamp graduate with a
                        love for all things tech. On a mission to build cool
                        stuff and solve big problems, one line at a time! I also
                        teach programming fundamentals! I try to help everyone
                        discover their coding potential, specifically for career
                        switchers!
                      </Text>
                      <Text w={"100%"}>
                        When I'm not teaching or typing away for a project,
                        you'll catch me at your local tech meetup spot, looking
                        out for new tech trends, upskilling myself with more
                        programming knowledge, or in a Discord server playing a
                        one-shot session of Dungeons & Dragons.
                      </Text>
                    </Stack>
                  </Center>
                </Paper>
              </Center>
            </Flex>
          </Center>
        </Paper>
      </Stack>
    </>
  );
}

export default App;
