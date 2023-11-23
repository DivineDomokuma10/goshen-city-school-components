import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const ProfileData = ({ profileKey, value }) => {
  return (
    <Flex
      w={"full"}
      py={"1"}
      borderBottom={"1px"}
      borderColor={"rgba(0,0,0,0.2)"}
      justifyContent={"space-between"}
    >
      <Text fontSize={"smaller"} fontWeight={"medium"}>
        {profileKey} :
      </Text>
      <Text fontSize={"smaller"}>{value}</Text>
    </Flex>
  );
};

export default ProfileData;
