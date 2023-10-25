import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Made with ❤ by PieroMastro</Text>
        <Stack direction={"row"} spacing={6}>
          <Button
            as="a"
            href="https://www.linkedin.com/in/pieromastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Button>
          <Button
            as="a"
            href="https://github.com/PieroMastro"
            target="blank"
            rel="noopener noreferer"
          >
            <FaGithub />
          </Button>
          <Button as="a" href="mailto:pier.andres@gmail.com">
            <FaEnvelope />
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
