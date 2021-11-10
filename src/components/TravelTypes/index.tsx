import { Flex, SimpleGrid } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export type ListTravels = {
  text: string;
  src: string;
};

const listTravels: ListTravels[] = [
  {
    text: "vida noturna",
    src: "/images/cocktail.svg",
  },

  {
    text: "praia",
    src: "/images/surf.svg",
  },

  {
    text: "moderno",
    src: "/images/building.svg",
  },

  {
    text: "clássico",
    src: "/images/museum.svg",
  },

  {
    text: "e mais...",
    src: "/images/earth.svg",
  },
];

export const TravelTypes = () => {
  return (
    <Flex
      as="section"
      maxWidth={1160}
      mx="auto"
      mt="100px"
      px="7"
      justify="space-between"
      align="center"
      flexWrap="wrap"
    >
      {listTravels.map((data, index) => (
        <TravelType key={index} data={data} />
      ))}
    </Flex>
  );
};
