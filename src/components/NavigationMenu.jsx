import { Box, Button, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaRss, FaShieldAlt } from "react-icons/fa";

const NavigationMenu = () => {
  const bg = useColorModeValue("gray.800", "gray.900");
  const color = useColorModeValue("white", "gray.200");

  return (
    <VStack bg={bg} p={4} borderRadius="md" spacing={4} align="stretch">
      <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid" color={color}>
        Generate Payload
      </Button>
      <Button leftIcon={<FaRss />} colorScheme="teal" variant="solid" color={color}>
        Live Feed
      </Button>
      <Button leftIcon={<FaShieldAlt />} colorScheme="teal" variant="solid" color={color}>
        Defense Stats
      </Button>
    </VStack>
  );
};

export default NavigationMenu;
