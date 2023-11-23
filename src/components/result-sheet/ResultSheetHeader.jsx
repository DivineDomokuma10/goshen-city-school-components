import React from "react";
import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";

const ResultSheetHeader = () => {
  return (
    <Box display="flex" flexDirection="column">
      <VStack>
        <Heading size="lg" fontWeight="medium">
          GOSHEN SCHOOLS, ENUGU
        </Heading>
        <Text>
          ADDRESS PLOT 11-14 LIVING SPRING AVENUE, OPP POLICE DECTECTIVE
          COLLEGE.
        </Text>
        <HStack spacing="24">
          <Text fontSize={"sm"}>
            <span style={{ fontWeight: "bold" }}>Phone:</span> 08035050509
          </Text>
          <Text fontSize={"sm"}>
            <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
            info@goshencityschools.com
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ResultSheetHeader;
