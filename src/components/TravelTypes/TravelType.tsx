import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { ListTravels } from ".";

type Props = {
  data: ListTravels;
};

export const TravelType = ({ data }: Props) => {
  const isMdVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isMdVersion) {
    return (
      <Flex align="center" justify="center" minWidth={220}>
        <Box w="8px" h="8px" borderRadius="full" bgColor="yellow.800" />

        <Text
          ml="4"
          fontWeight="bold"
          color="gray.600"
          fontSize="24px"
          textAlign="center"
        >
          {data.text}
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" align="center" minWidth={120}>
      <Box w="85" h="85">
        <Image src={data.src} alt={data.text} />
      </Box>

      <Text
        mt="24px"
        fontWeight="bold"
        color="gray.600"
        fontSize="24px"
        textAlign="center"
      >
        {data.text}
      </Text>
    </Flex>
  );
};
