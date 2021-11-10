import { Flex, Box, Image } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      as="header"
      h="100px"
      align="center"
      justify="center"
      maxWidth={1160}
      mx="auto"
    >
      <Box>
        <Image src="/images/Logo.svg" alt="Logo" />
      </Box>
    </Flex>
  );
};
