import React from "react";
import ProfileData from "./ProfileData";
import { Box, Flex } from "@chakra-ui/react";

const StudentProfile = ({ profile }) => {
  return (
    <Flex w={"full"} alignItems={"center"} justifyContent={"space-between"}>
      <Box w={"30%"}>
        <ProfileData value={profile.portalId} profileKey="Portal Id" />
        <ProfileData value={profile.name} profileKey={"Name"} />
        <ProfileData value={profile.class} profileKey={"Class"} />
        <ProfileData value={profile.gender} profileKey={"Gender"} />
        <ProfileData value={profile.term} profileKey={"Term"} />
        <ProfileData value={profile.year} profileKey={"Year"} />
      </Box>
      <Flex
        w={100}
        h={100}
        border="2px"
        fontSize={"sm"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        School logo
      </Flex>
      <Box w={"30%"}>
        <ProfileData value={profile.noInClass} profileKey={"No. in class"} />
        <ProfileData value={profile.classAvg} profileKey={"Class Average"} />
        <ProfileData
          value={profile.avgPercentage}
          profileKey={"Average/Percentage"}
        />
        <ProfileData value={profile.grade} profileKey={"Grade"} />
        <ProfileData
          value={profile.maxMarkObtainable}
          profileKey={"Max Mark Obtainable"}
        />
        <ProfileData
          value={profile.markObtained}
          profileKey={"Mark Obtained"}
        />
      </Box>
      <Flex
        w={120}
        h={120}
        border="2px"
        fontSize={"sm"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        student Image
      </Flex>
    </Flex>
  );
};

export default StudentProfile;
