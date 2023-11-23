import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const InvoiceData = ({ index, dataKey, data }) => {
  return (
    <Flex
      p="2"
      px="2"
      borderBottom="1px"
      borderColor="gray.400"
      bg={index % 2 == 0 ? "gray.100" : "" }
      justifyContent="space-between"
    >
      <Text>{dataKey}:</Text>
      <Text fontWeight="bold">{data}</Text>
    </Flex>
  );
};

export default InvoiceData;
