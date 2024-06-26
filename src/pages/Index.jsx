import { Box, Button, Container, Heading, Select, Text, VStack } from "@chakra-ui/react";
import { FaRobot, FaDownload } from "react-icons/fa";
import NavigationMenu from "../components/NavigationMenu";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={5} align="stretch">
        <NavigationMenu />
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="gray.700" color="white">
          <Heading mb={4} display="flex" alignItems="center">
            <FaRobot />
            <Text ml={2}>Android Payload Generator</Text>
          </Heading>
          <Text mb={4}>Generate Fully Undetectable (FUD) payloads for Android devices. Select the type of payload you need, and click generate.</Text>
          <Select placeholder="Select payload type" variant="filled" borderColor="teal" id="payloadType">
            <option value="banking">Banking Trojan</option>
            <option value="ransomware">Ransomware</option>
            <option value="spyware">Spyware</option>
            <option value="adware">Adware</option>
            <option value="rootkit">Rootkit</option>
            <option value="keylogger">Keylogger</option>
          </Select>
          <Button
            leftIcon={<FaDownload />}
            colorScheme="teal"
            mt={4}
            onClick={() => {
              const payloadType = document.getElementById("payloadType").value;
              console.log(`Generating ${payloadType} payload...`);
              alert(`Your ${payloadType} payload is ready. Choose to download or save to cloud.`);
            }}
          >
            Generate Payload
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
