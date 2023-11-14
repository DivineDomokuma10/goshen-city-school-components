import React from "react";
import { VStack } from "@chakra-ui/react";

const ResultSheetContainer = ({ children }) => {
  return (
    <VStack w={"full"} p={"2"} spacing={"2"} boxShadow={"md"} bg={"white"}>
      {children}
    </VStack>
  );
};

export default ResultSheetContainer;
