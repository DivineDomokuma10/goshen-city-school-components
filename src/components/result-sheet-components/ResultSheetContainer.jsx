import React from "react";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";

const ResultSheetContainer = ({ children }) => {
  return (
    <Box p={"5"} bg={"gray.50"}>
      <VStack w={"full"} p={"2"} spacing={"2"} boxShadow={"md"} bg={"white"}>
        {children}
      </VStack>
      <Flex justifyContent={"end"} px={"2"} py={"5"} onClick={() => print()}>
        <Button w={"fit-content"} size={"sm"} colorScheme="purple">
          Print
        </Button>
      </Flex>
    </Box>
  );
};

export default ResultSheetContainer;
