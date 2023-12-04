import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TableRow = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const naviagte = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchContacts()
  }, []);

  const fetchContacts=()=>{
    axios.get(`https://rich-teal-barracuda-toga.cyclic.app/`).then((res) => {
        setContacts(res.data);
        console.log(contacts);        
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    onOpen();
  };

  const handleUpdate = () => {
    console.log(selectedContact)
    axios
      .patch(`https://rich-teal-barracuda-toga.cyclic.app/contacts/edit/${selectedContact._id}`, selectedContact)
      .then(() => {
        fetchContacts()
        onClose();
      })
      .catch((err)=>{
        console.log(err)
      })
  };

  const handleDelete = (id) => {
    axios.delete(`https://rich-teal-barracuda-toga.cyclic.app/contacts/delete/${id}`).then(() => {
        fetchContacts()
        onClose();
      })
      .catch((err)=>{
        console.log(err)
      })
  };

  const handleSearch = () => {
    if (searchTerm == "") {
      setContacts(contacts);
    } else {
      axios.get(`https://rich-teal-barracuda-toga.cyclic.app/?name=${searchTerm}`).then((res) => {
        setContacts(res.data);
      });
    }
  };
  

  const handleRedirect = (id) => {
    naviagte(`appointment/${id}`);
  };

  return (
    <DIV>
      <div id="search">
        <Input
          placeholder="Search by First Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <Table>
        <Thead>
          <Tr>
            <Th>Full Name</Th>
            <Th>Email</Th>
            <Th>Phone Number</Th>
            <Th>Label</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
            <Th>Appointment</Th>
          </Tr>
        </Thead>
        <Tbody>
          {contacts.map((contact) => (
            <Tr key={contact.id}>
              <Td>{contact.name}</Td>
              <Td>{contact.email}</Td>
              <Td>{contact.phone}</Td>
              <Td>{contact.label}</Td>
              <Td>
                <Button id="edit" onClick={() => handleEdit(contact)}>
                  Edit
                </Button>
              </Td>
              <Td>
                <Button id="delete" onClick={() => handleDelete(contact._id)}>
                  Delete
                </Button>
              </Td>
              <Td>
                <Button onClick={() => handleRedirect(contact._id)}>
                  Schedule Appointment
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Contact</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Full Name"
              value={selectedContact?.name || ""}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  name: e.target.value,
                })
              }
            />
            <Input
              placeholder="Email"
              value={selectedContact?.email || ""}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  email: e.target.value,
                })
              }
            />
            <Input
              placeholder="Phone"
              value={selectedContact?.phone || ""}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  phone: +e.target.value,
                })
              }
            />

            <Input
              placeholder="label"
              value={selectedContact?.label || ""}
              onChange={(e) =>
                setSelectedContact({
                  ...selectedContact,
                  label: e.target.value,
                })
              }
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DIV>
  );
};

export default TableRow;

const DIV = styled.div`
  #search {
    input {
      width: 70%;
    }
    display: flex;
    justify-content: space-around;
    padding: 1%;
    margin-bottom: 30px;
  }
  #edit {
    color: white;
    background-color: green;
  }
  #delete {
    color: white;
    background-color: red;
  }
`;