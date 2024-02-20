"use client";
import { Blog } from "@/types";
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Thead,
  Tr,
  Td,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

export function BlogTable({ blogs }: { blogs: Blog[] }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <ConfirmationModal close={onClose} opened={isOpen} />
      <TableContainer>
        <Table size={"sm"} variant="simple">
          <Thead>
            <Tr>
              <Td>No</Td>
              <Td>Title</Td>
              <Td>Actions</Td>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map((blog, i) => {
              return (
                <Tr key={blog.id}>
                  <Td>{i + 1}</Td>
                  <Td>{blog.title}</Td>
                  <Td>
                    <Flex gap={".25rem"}>
                      <Button variant={"ghost"}>
                        <MdOutlineModeEdit />
                      </Button>
                      <Button
                        variant={"ghost"}
                        onClick={onOpen}
                        _hover={{ color: "red" }}
                      >
                        <FaRegTrashAlt />
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

function ConfirmationModal({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  return (
    <Modal isOpen={opened} onClose={close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Blogs</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Are You Sure ?</p>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={close}>
            Cancel
          </Button>
          <Button variant="ghost" colorScheme="red">
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
