import { Box, Text } from "@chakra-ui/react";

import { Divider } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider bgColor="gray.600" w="60px" mx="auto" mt="80px" mb="52px" />

      <Box>
        <Text textAlign="center" fontSize="4xl" color="gray.600">
          Vamos nessa? <br /> Então escolha seu continente
        </Text>
      </Box>
    </>
  );
}
