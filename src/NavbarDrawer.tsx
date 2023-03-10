import { Anchor, Drawer, Flex } from "@mantine/core";

const NavbarDrawer = ({
  close,
  opened,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}: any) => {
  return (
    <Drawer
      onClose={close}
      opened={opened}
      overlayProps={{ opacity: 0.5, blur: 4 }}
    >
      <Flex
        align={"center"}
        direction={"column"}
        h={"15vh"}
        justify={"space-between"}
      >
        <Anchor
          onClick={() => {
            close();
            scrollToAbout({ alignment: "center" });
          }}
          size={"xl"}
        >
          About
        </Anchor>
        <Anchor
          onClick={() => {
            close();
            scrollToProjects({ alignment: "center" });
          }}
          size={"xl"}
        >
          Projects
        </Anchor>
        <Anchor
          onClick={() => {
            close();
            scrollToContact({ alignment: "center" });
          }}
          size={"xl"}
        >
          Contact
        </Anchor>
      </Flex>
    </Drawer>
  );
};

export default NavbarDrawer;
