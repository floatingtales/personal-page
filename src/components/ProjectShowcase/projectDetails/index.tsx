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
import IProjectDetailsProps from "../../../interfaces/IProjectDetailsProps";

const ProjectDetails = ({
  bgColor,
  imgSource,
  projTitle,
  projDesc,
  stackList,
  linkList,
}: IProjectDetailsProps) => {
  return (
    <Card
      h={"100%"}
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
          <Paper w={"25%"} bg={bgColor}>
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
          <Badge key={techstack} variant={"outline"}>
            {techstack}
          </Badge>
        ))}
      </Group>
      <Space h={"md"} />
      <Group spacing={"sm"}>
        {linkList.map((link) => (
          <Button
            key={link.url}
            compact
            component="a"
            href={link.url}
            target="_blank"
          >
            {link.name}
          </Button>
        ))}
      </Group>
      <Space h={"md"} />
    </Card>
  );
};

export default ProjectDetails;
