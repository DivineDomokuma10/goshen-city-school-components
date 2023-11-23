import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const Grading = () => {
  return (
    <Flex w={"full"} border={"1px"} borderColor={"rgba(0,0,0,0.2)"}>
      <Flex
        p={"3"}
        fontSize={"lg"}
        alignItems={"center"}
        fontWeight={"extrabold"}
        justifyContent={"center"}
      >
        KEY
      </Flex>
      <TableContainer w={"full"}>
        <Table variant={"unstyled"}>
          <Thead>
            <Tr>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderBottom={"1px"}
                p={"2"}
                borderColor={"rgba(0,0,0,0.2)"}
              >
                A
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderBottom={"1px"}
                p={"2"}
                borderColor={"rgba(0,0,0,0.2)"}
              >
                B
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderBottom={"1px"}
                p={"2"}
                borderColor={"rgba(0,0,0,0.2)"}
              >
                C
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderBottom={"1px"}
                p={"2"}
                borderColor={"rgba(0,0,0,0.2)"}
              >
                D
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderBottom={"1px"}
                p={"2"}
                borderColor={"rgba(0,0,0,0.2)"}
              >
                E
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderColor={"rgba(0,0,0,0.2)"}
              >
                70 - 100
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderColor={"rgba(0,0,0,0.2)"}
              >
                60 - 69
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderColor={"rgba(0,0,0,0.2)"}
              >
                50 - 59
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderColor={"rgba(0,0,0,0.2)"}
              >
                40 - 49
              </Th>
              <Th
                borderX={"1px"}
                textAlign="center"
                borderColor={"rgba(0,0,0,0.2)"}
              >
                0 - 39
              </Th>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Grading;
