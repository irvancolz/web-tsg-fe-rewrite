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
import { useRouter } from "next/navigation";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

export function BlogTable({ blogs }: { blogs: Blog[] }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  function openEditor(title: string) {
    router.push(`/blog-management/${title}/edit`);
  }

  return (
    <>
      <ConfirmationModal close={onClose} opened={isOpen} />
      <TableContainer>
        <Table size={"sm"} variant="simple">
          <Thead>
            <Tr>
              <Td fontWeight={700} fontSize={"1.15rem"}>
                No
              </Td>
              <Td fontWeight={700} fontSize={"1.15rem"}>
                Title
              </Td>
              <Td fontWeight={700} fontSize={"1.15rem"}>
                Actions
              </Td>
            </Tr>
          </Thead>
          <Tbody>
            {blogs.map((blog, i) => {
              return (
                <Tr key={blog.id}>
                  <Td>{i + 1}</Td>
                  <Td>{blog.title}</Td>
                  <Td>
                    <Flex gap={".25rem"} onClick={() => openEditor(blog.title)}>
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
