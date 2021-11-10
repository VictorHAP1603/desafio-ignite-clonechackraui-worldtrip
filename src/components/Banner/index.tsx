import { Flex, Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export const Banner = () => {
  const isMdVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box
      w="100vw"
      h={["280px", "335px"]}
      as="section"
      position="relative"
      bgImage="/images/Background.png"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
      px="7"
    >
      <Flex
        maxWidth={1160}
        mx="auto"
        h="100%"
        w="100%"
        zIndex={10}
        justify="space-between"
      >
        <Box alignSelf="center">
          <Text color="gray.50" fontSize={["2xl", "4xl"]}>
            5 Continentes, {isMdVersion && <br />} infinitas possibilidades.
          </Text>

          <Text
            color="gray.100"
            fontSize={["14px", "lg"]}
            mt="20px"
            w={["100%", "100%", "70%"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isMdVersion && (
          <Box alignSelf="flex-end" transform="translateY(35px)">
            <Image maxWidth="100%" src="/images/Airplane.svg" alt="AirPlane" />
          </Box>
        )}
      </Flex>
    </Box>
  );
};
