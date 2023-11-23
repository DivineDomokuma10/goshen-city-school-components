import {
  Table,
  TableContainer,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

const ResultSheet = ({ children }) => {
  return (
    <TableContainer w={"full"} borderY={"1px"} borderColor={"rgba(0,0,0,0.2)"}>
      <Table variant={"simple"}>
        <Thead>
          <Tr>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              SUBJECT LIST
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              ASSIGNMENT(20)
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              TEST(20)
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              EXAM(60)
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              TOTAL
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              GRADE
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              CLASS AVERAGE
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              SUBJECT POSITION
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              REMARKS
            </Th>
            <Th
              borderX={"1px"}
              p={"1"}
              fontSize={"x-small"}
              textAlign={"center"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              VERDICT
            </Th>
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default ResultSheet;
