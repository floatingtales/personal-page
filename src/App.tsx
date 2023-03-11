import {
  AppShell,
  Flex,
  Footer,
  Header,
  MediaQuery,
  Paper,
  Space,
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

      <Space h={"md"} />

      <Flex direction={"column"}>
        <Flex
          align={"center"}
          direction={{ base: "column", sm: "row" }}
          justify={"space-evenly"}
          mih={"70vh"}
        >
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Paper h={"70vh"} w={"90%"}>
              <Flex align={"center"} h={"100%"} justify={"center"}>
                <SelfTitle />
              </Flex>
            </Paper>
          </MediaQuery>
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Paper h={"70vh"} w={"90%"} ref={targetAbout}>
              <Flex align={"center"} h={"100%"} justify={"center"}>
                <About />
              </Flex>
            </Paper>
          </MediaQuery>
        </Flex>

        <Space h={"md"} />

        <Flex
          align={"center"}
          direction={{ base: "column", sm: "row" }}
          justify={"space-evenly"}
          mih={"70vh"}
        >
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Paper h={"70vh"} w={"90%"}>
              <Flex align={"center"} h={"100%"} justify={"center"}>
                <ProjectTitle />
              </Flex>
            </Paper>
          </MediaQuery>
          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Paper w={"90%"} ref={targetProjects}>
              <ProjectShowcase />
            </Paper>
          </MediaQuery>
        </Flex>

        <Space h={"md"} />

        <Flex
          align={"center"}
          direction={{ base: "column", sm: "row" }}
          justify={"space-evenly"}
          mih={"70vh"}
        >
          <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
            <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
              <Paper w={"90%"}></Paper>
            </MediaQuery>
          </MediaQuery>

          <MediaQuery largerThan={"sm"} styles={{ width: "45vw" }}>
            <Paper h={"70vh"} w={"90%"} ref={targetContact}>
              <Flex align={"center"} h={"100%"} justify={"center"}>
                <Contact />
              </Flex>
            </Paper>
          </MediaQuery>
        </Flex>
      </Flex>
    </AppShell>
  );
};

export default App;
