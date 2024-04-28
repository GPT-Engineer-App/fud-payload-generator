import { Box, Button, Container, Heading, Select, Text, VStack } from "@chakra-ui/react";
import { FaRobot, FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={5} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4} display="flex" alignItems="center">
            <FaRobot />
            <Text ml={2}>Android Payload Generator</Text>
          </Heading>
          <Text mb={4}>Generate Fully Undetectable (FUD) payloads for Android devices. Select the type of payload you need, and click generate.</Text>
          <Select placeholder="Select payload type">
            <option value="banking">Banking Trojan</option>
            <option value="ransomware">Ransomware</option>
            <option value="spyware">Spyware</option>
            <option value="adware">Adware</option>
          </Select>
          <Button leftIcon={<FaDownload />} colorScheme="teal" mt={4}>
            Generate Payload
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
