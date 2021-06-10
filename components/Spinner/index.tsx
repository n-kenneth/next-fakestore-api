import { Box, Spinner, Container } from "@chakra-ui/react";

const Loading = () => (
  <Container maxW="container.xl" height="100vh" width="100%" pos="relative">
    <Box
      pos="absolute"
      backgroundColor="rgba(255, 255, 255, .5)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100%"
      left="0"
    >
      <Spinner size="xl" />
    </Box>
  </Container>
);

export default Loading;
