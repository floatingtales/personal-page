import {
  Anchor,
  Burger,
  Center,
  Flex,
  MediaQuery,
  Paper,
  Title,
} from "@mantine/core";

import NavbarProps from "../../interfaces/INavbarInterface";

const SelfNavbar = ({
  opened,
  scrollToAbout,
  scrollToContact,
  scrollToProjects,
  toggle,
}: NavbarProps) => {
  return (
    <Center h={"100%"}>
      <Paper w={"95vw"}>
        <Flex align={"center"} h={"100%"} justify={"space-between"}>
          <Title order={3}>Dillan Martin</Title>
          <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
            <Flex
              align={"center"}
              direction={"row"}
              gap={"sm"}
              h={"100%"}
              justify={"center"}
            >
              <Anchor
                onClick={() => {
                  scrollToAbout({ alignment: "center" });
                }}
              >
                About
              </Anchor>
              <Anchor
                onClick={() => {
                  scrollToProjects({ alignment: "center" });
                }}
              >
                Projects
              </Anchor>
              <Anchor
                onClick={() => {
                  scrollToContact({ alignment: "center" });
                }}
              >
                Contact
              </Anchor>
            </Flex>
          </MediaQuery>
          <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
            <Burger onClick={toggle} opened={opened} />
          </MediaQuery>
        </Flex>
      </Paper>
    </Center>
  );
};

export default SelfNavbar;
