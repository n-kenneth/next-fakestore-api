import { chakra, Container, Text } from "@chakra-ui/react";
import { GitHub } from "react-feather";

const Footer = () => (
  <chakra.footer background="#000" py="10" textAlign="center" mt="165px">
    <Container maxW="container.xl">
      <Text color="#fff" mb="5">
        Made using{" "}
        <chakra.a
          href="https://fakestoreapi.com/"
          target="_blank"
          fontWeight="bold"
        >
          Fake Store API
        </chakra.a>
      </Text>
      <chakra.a
        href="https://github.com/n-kenneth/next-fakestore-api"
        target="_blank"
        textAlign="center"
        display="flex"
        justifyContent="center"
      >
        <GitHub color="#fff" />
      </chakra.a>
    </Container>
  </chakra.footer>
);

export default Footer;
