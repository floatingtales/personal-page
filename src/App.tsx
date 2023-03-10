import { Center, Flex, Header, Paper, MediaQuery, Footer } from "@mantine/core";
import About from "./About";
import ProjectTitle from "./ProjectTitle";
import SelfFooter from "./SelfFooter";
import SelfNavbar from "./SelfNavbar";
import SelfTitle from "./SelfTitle";

const App = () => {
  return (
    <Flex direction={"column"}>
      <Header height={"5rem"}>
        <SelfNavbar />
      </Header>

      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={"space-evenly"}
        mih={"100vh"}
      >
        <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
          <Center h={"100vh"}>
            <Paper w={"95%"}>
              <SelfTitle />
            </Paper>
          </Center>
        </MediaQuery>
        <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
          <Center h={"100vh"}>
            <Paper w={"95%"}>
              <About />
            </Paper>
          </Center>
        </MediaQuery>
      </Flex>

      <Flex
        direction={{ base: "column", sm: "row" }}
        justify={"space-evenly"}
        mih={"100vh"}
      >
        <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
          <Center h={"100vh"}>
            <Paper w={"95%"}>
              <ProjectTitle />
            </Paper>
          </Center>
        </MediaQuery>
        <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
          <Center h={"100vh"}>
            <Paper w={"95%"}>
              This is where you put the details of projects
            </Paper>
          </Center>
        </MediaQuery>
      </Flex>

      <Footer height={"5rem"}>
        <SelfFooter />
      </Footer>
    </Flex>
  );
};

export default App;
