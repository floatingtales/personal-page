import { Button, Flex, Text, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const Contact = () => {
  return (
    <Flex direction={"column"} gap={"sm"} w={"100%"}>
      <Title>Heya!</Title>
      <Text>
        Wanna work together? Or just have a slice of pizza and talk tech?
      </Text>
      <Text>Here's how you can reach me:</Text>
      <Flex align={"center"} direction={"row"} gap={"sm"}>
        <Button
          compact
          component="a"
          href="http://www.linkedin.com/in/dill-martin"
          leftIcon={<IconBrandLinkedin />}
          styles={{
            leftIcon: {
              marginRight: "0.15rem",
            },
          }}
          target={"_blank"}
          variant={"outline"}
        >
          LinkedIn
        </Button>
        <Button
          compact
          component="a"
          href="http://www.github.com/floatingtales"
          leftIcon={<IconBrandGithub />}
          styles={{
            leftIcon: {
              marginRight: "0.15rem",
            },
          }}
          target={"_blank"}
          variant={"outline"}
        >
          Github
        </Button>
        <Button
          compact
          component="a"
          href="mailto:dillan.martin.the@gmail.com"
          leftIcon={<IconBrandGmail />}
          styles={{
            leftIcon: {
              marginRight: "0.15rem",
            },
          }}
          target={"_blank"}
          variant={"outline"}
        >
          Email
        </Button>
      </Flex>
    </Flex>
  );
};

export default Contact;
