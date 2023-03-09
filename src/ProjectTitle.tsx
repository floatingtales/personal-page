import { Center, Stack, Text, Title } from "@mantine/core";

const ProjectTitle = () => {
  return (
    <Stack>
      <Center>
        <Title order={1}>My Works</Title>
      </Center>
      <Center>
        <Text>Stuff I previously did</Text>
      </Center>
    </Stack>
  );
};

export default ProjectTitle;
