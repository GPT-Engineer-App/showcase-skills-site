import React from "react";
import { Box, Flex, Heading, Text, Image, Link, Stack, Grid, FormControl, FormLabel, Input, Textarea, Button, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6} bg="teal.500" color="white">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            John Doe
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Link href="#about" px={2} py={1} rounded={"md"}>
            About
          </Link>
          <Link href="#portfolio" px={2} py={1} rounded={"md"}>
            Portfolio
          </Link>
          <Link href="#blog" px={2} py={1} rounded={"md"}>
            Blog
          </Link>
          <Link href="#contact" px={2} py={1} rounded={"md"}>
            Contact
          </Link>
        </Stack>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Hi, I'm John Doe
        </Heading>
        <Text color={"gray.500"}>Full Stack Developer | JavaScript Enthusiast</Text>
      </Box>

      {/* About */}
      <Box id="about" py={10} px={6}>
        <Stack spacing={4} as={Box} textAlign={"center"} maxW={"3xl"} margin="auto">
          <Heading as="h2" size="xl">
            About Me
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            I'm a passionate full stack developer with expertise in JavaScript, React, Node.js, and more. I love building modern, responsive web applications and solving complex problems.
          </Text>
        </Stack>
      </Box>

      {/* Portfolio */}
      <Box id="portfolio" py={10} px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Portfolio
        </Heading>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={8}>
          <Box>
            <Image src="https://images.unsplash.com/photo-1646723907212-a61af18b6884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzEwOTk0NTY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 1" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Project 1
            </Heading>
            <Text>A web app built with React and Node.js</Text>
          </Box>
          <Box>
            <Image src="https://images.unsplash.com/photo-1531986362435-16b427eb9c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMDk5NDU2OHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Project 2" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Project 2
            </Heading>
            <Text>A mobile app built with React Native</Text>
          </Box>
        </Grid>
      </Box>

      {/* Blog */}
      <Box id="blog" py={10} px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Blog
        </Heading>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={8}>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Blog Post 1
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Blog Post 2
            </Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</Text>
          </Box>
        </Grid>
      </Box>

      {/* Contact */}
      <Box id="contact" py={10} px={6}>
        <Heading as="h2" size="xl" textAlign="center" mb={8}>
          Contact Me
        </Heading>
        <Box maxW="md" mx="auto">
          <form>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Send Message
            </Button>
          </form>
        </Box>
      </Box>

      {/* Footer */}
      <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Link href="https://github.com/johndoe" isExternal mx={6}>
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal mx={6}>
              <FaLinkedin />
            </Link>
            <Link href="mailto:john@example.com" isExternal mx={6}>
              <FaEnvelope />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
