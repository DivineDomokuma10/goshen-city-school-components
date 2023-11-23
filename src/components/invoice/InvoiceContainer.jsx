import React from "react";
import { Flex, HStack } from "@chakra-ui/react";

const InvoiceContainer = ({ children }) => {
  return (
    <Flex w="full" h="100vh" py="10" justifyContent="center">
      <Flex w="65%" justifyContent="space-between">
        {children}
      </Flex>
    </Flex>
  );
};

export default InvoiceContainer;
