import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="50px" />
      <Text fontSize="xl" fontWeight="bold">
        Nav Bar
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
