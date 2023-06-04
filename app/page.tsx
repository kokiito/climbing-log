"use client";
import Avatar from "boring-avatars";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Tag,
  TagLabel,
  HStack,
  SimpleGrid,
  Text,
  Container,
  Icon,
  Center,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Home() {
  const doneDays = [11, 18, 25, 27];
  return (
    <Container mt={10} max-width={"500px"}>
      <Flex mb={10}>
        <Box ml={4}>
          <Avatar
            size={120}
            name="Maria Mitchell"
            variant="beam"
            colors={["#482344", "#2B5166", "#429867", "#FAB243", "#E02130"]}
          />
        </Box>
        <Spacer />
        <Box>
          <Heading size={"md"} minW={"300px"}>
            koki ito
          </Heading>
          <HStack mt={3} spacing={4}>
            {[
              { text: "滑り手" },
              { text: "175cm" },
              { text: "ホーム：秋パン" },
            ].map((data) => (
              <Tag
                size={"sm"}
                key={"sm"}
                borderRadius="full"
                variant="solid"
                colorScheme="blue"
              >
                <TagLabel>{data.text}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </Box>
      </Flex>
      <SimpleGrid columns={7}>
        {[...Array(30)]
          .map((_, i) => i + 1)
          .map((day) => (
            <Box height="80px" width="80px" border="1px" borderColor="white">
              <Text m={"0 0 0 6px"}>{day}</Text>
              {doneDays.includes(day) && (
                <Center>
                  <Icon as={CheckCircleIcon} w={8} h={8} color="blue" />
                </Center>
              )}
            </Box>
          ))}
      </SimpleGrid>
    </Container>
  );
}
