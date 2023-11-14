import React from "react";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TeacherRemarks = ({ remarks }) => {
  return (
    <TableContainer w={"full"}>
      <Table variant={"unstyled"}>
        <Thead>
          <Tr borderTop={"1px"} borderColor={"rgba(0,0,0,0.2)"}>
            <Th
              borderX={"1px"}
              borderBottom={"1px"}
              p={"2"}
              fontSize={"sm"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              Class Teacher&apos;s Comment
            </Th>
            <Td
              borderX={"1px"}
              borderBottom={"1px"}
              p={"2"}
              fontSize={"sm"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              {remarks.principal}
            </Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th
              borderX={"1px"}
              borderBottom={"1px"}
              p={"2"}
              fontSize={"sm"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              Principal&apos;s Remark
            </Th>
            <Td
              borderX={"1px"}
              borderBottom={"1px"}
              p={"2"}
              fontSize={"sm"}
              borderColor={"rgba(0,0,0,0.2)"}
            >
              {remarks.teacher}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TeacherRemarks;
