import {
  AppShell,
  Center,
  Flex,
  Footer,
  Header,
  MediaQuery,
  Paper,
} from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarDrawer from "./components/NavbarDrawer";
import ProjectTitle from "./components/ProjectTitle";
import SelfFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SelfTitle from "./components/SelfTitle";
import ProjectShowcase from "./components/ProjectShowcase";

const App = () => {
  const { scrollIntoView: scrollToAbout, targetRef: targetAbout } =
    useScrollIntoView<HTMLDivElement>();
  const { scrollIntoView: scrollToProjects, targetRef: targetProjects } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToContact, targetRef: targetContact } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });

  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      header={
        <Header height={"5rem"} pos={"static"}>
          <SiteHeader
            opened={opened}
            scrollToAbout={scrollToAbout}
            scrollToProjects={scrollToProjects}
            scrollToContact={scrollToContact}
            toggle={toggle}
          />
        </Header>
      }
      footer={
        <Footer height={"3.5rem"} pos={"static"}>
          <SelfFooter />
        </Footer>
      }
    >
      <NavbarDrawer
        close={close}
        opened={opened}
        scrollToAbout={scrollToAbout}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Flex direction={"column"}>
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify={"space-evenly"}
          mih={"90vh"}
        >
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Center h={"90vh"}>
              <Paper w={"95%"}>
                <SelfTitle />
              </Paper>
            </Center>
          </MediaQuery>
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Center h={"90vh"} ref={targetAbout}>
              <Paper w={"95%"}>
                <About />
              </Paper>
            </Center>
          </MediaQuery>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "row" }}
          justify={"space-evenly"}
          mih={"90vh"}
        >
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Center h={"90vh"} ref={targetProjects}>
              <Paper w={"95%"}>
                <ProjectTitle />
              </Paper>
            </Center>
          </MediaQuery>
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Center h={"90vh"}>
              <Paper w={"95%"}>
                <ProjectShowcase />
              </Paper>
            </Center>
          </MediaQuery>
        </Flex>

        <Flex
          direction={{ base: "column", sm: "row" }}
          justify={"space-evenly"}
          mih={"90vh"}
          w={"100%"}
        >
          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
              <Center h={"90vh"}>
                <Paper w={"95%"}></Paper>
              </Center>
            </MediaQuery>
          </MediaQuery>

          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Center h={"90vh"} ref={targetContact}>
              <Paper w={"95%"}>
                <Contact />
              </Paper>
            </Center>
          </MediaQuery>
        </Flex>
      </Flex>
    </AppShell>
  );
};

export default App;
