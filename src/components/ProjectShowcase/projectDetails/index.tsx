import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Image,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";

const ProjectDetails = () => {
  const bgColor = "#6486b9";
  const imgSource = "/bagelfunds.svg";
  const projTitle = "Bagelfunds";
  const projDesc = "An Indonesian style ROSCA/Arisan tracking app";
  const stackList = ["Bootstrap", "EJS", "Express.js", "Node.js", "PostgreSQL"];
  const linkList = [
    {
      name: "Repo",
      url: "https://github.com/floatingtales/bagelfunds",
    },
  ];
  return (
    <Card
      mih={"50vh"}
      padding={"lg"}
      radius={"md"}
      shadow={"sm"}
      w={"100%"}
      withBorder
    >
      <Card.Section bg={bgColor}>
        <Flex
          align={"center"}
          direction={"column"}
          justify={"center"}
          h={"15rem"}
        >
          <Paper w={"35%"} bg={bgColor}>
            <Image src={imgSource} withPlaceholder />
          </Paper>
        </Flex>
      </Card.Section>
      <Space h={"sm"} />
      <Title>{projTitle}</Title>
      <Text>{projDesc}</Text>
      <Space h={"sm"} />
      <Group spacing={"sm"}>
        {stackList.map((techstack) => (
          <Badge variant={"outline"}>{techstack}</Badge>
        ))}
      </Group>
      <Space h={"md"} />
      <Group spacing={"sm"}>
        {linkList.map((link) => (
          <Button compact component="a" href={link.url} target="_blank">
            {link.name}
          </Button>
        ))}
      </Group>
      <Space h={"md"} />
    </Card>
  );
};

export default ProjectDetails;
