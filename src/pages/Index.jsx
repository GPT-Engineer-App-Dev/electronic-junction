import { Box, Container, VStack, Text, Image, Flex, Heading, Link, HStack, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="blue.700" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl">Your one-stop shop for the latest electronics</Text>
        <Button mt={8} size="lg" colorScheme="teal">Shop Now</Button>
      </Box>

      {/* Products Section */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={10}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Product 1" />
            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="xl">Product 1</Text>
              </Box>
              <Text mt={2} color="gray.500">$299.99</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Product 2" />
            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="xl">Product 2</Text>
              </Box>
              <Text mt={2} color="gray.500">$399.99</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Product 3" />
            <Box p={6}>
              <Box d="flex" alignItems="baseline">
                <Text fontWeight="semibold" fontSize="xl">Product 3</Text>
              </Box>
              <Text mt={2} color="gray.500">$499.99</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <HStack spacing={8} justifyContent="center" mb={4}>
          <Link href="#"><FaFacebook size="24" /></Link>
          <Link href="#"><FaTwitter size="24" /></Link>
          <Link href="#"><FaInstagram size="24" /></Link>
        </HStack>
        <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;