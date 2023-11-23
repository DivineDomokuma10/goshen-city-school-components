import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const Invoice = ({ children, index }) => {
  return (
    <VStack w="60%">
      <Heading
        w="full"
        p="2"
        color="gray.100"
        borderRadius="lg"
        bg="blue.700"
        size="lg"
      >
        Payment Notification
      </Heading>
      <Box
        w="full"
        overflow="hidden"
        border="1px"
        borderRadius="5px"
        borderColor="gray.400"
      >
        {children}
      </Box>
    </VStack>
  );
};

export default Invoice;
