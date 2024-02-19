import { getAllBlog } from "@/api";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Button,
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
  Container,
} from "@chakra-ui/react";
import React from "react";
// import { Container } from "@/components";

export const revalidate = 0;

export default async function Page() {
  const blogs = await getAllBlog();
  return (
    <TableContainer>
      <Table size={"sm"}>
        <Thead>
          <Tr>
            <Td>No</Td>
            <Td>Title</Td>
            <Td>actions</Td>
          </Tr>
        </Thead>
        <Tbody>
          {blogs.map((blog, i) => {
            return (
              <Tr key={blog.id}>
                <Td>{i + 1}</Td>
                <Td>{blog.title}</Td>
                <Td>
                  <Button>
                    <MdOutlineModeEdit />
                  </Button>
                  <Button>
                    <FaRegTrashAlt />
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
