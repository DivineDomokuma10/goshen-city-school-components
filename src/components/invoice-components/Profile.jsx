import { Heading, Flex } from "@chakra-ui/react";
import React from "react";

const Profile = ({ name, email, phone }) => {
  return (
    <Flex
      p="4"
      h="fit-content"
      rowGap="5px"
      border="1px"
      direction="column"
      borderRadius="5px"
      borderColor="gray.400"
    >
      <Heading size="lg">{name}</Heading>
      <Heading size="sm">Email: {email}</Heading>
      <Heading size="sm">Phone: {phone}</Heading>
    </Flex>
  );
};

export default Profile;
