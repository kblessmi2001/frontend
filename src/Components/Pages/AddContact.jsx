// SignUp.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  Box,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import axios from "axios";
import styled from "styled-components";

const AddContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    label: "work",
  });

  const handleInputChange = (e) => {
    if (e.target.name == "phone") {
      setFormData({ ...formData, [e.target.name]: +e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await fetch("https://rich-teal-barracuda-toga.cyclic.app/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Data successfully stored!");
        alert(`Contact ${formData.name} Added!`)
      } else {
        console.error("Error storing data:", response.statusText);
      }
    } catch (error) {
      console.error("Error storing data:", error);
    }
  };
  return (
    <DIV>
      <FormControl id="name" mb={4}>
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="email" mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="phone" mb={4}>
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl id="label" mb={4}>
        <FormLabel>Label</FormLabel>
        <Select
          name="label"
          value={formData.label}
          onChange={handleInputChange}
        >
          <option value="work">Work</option>
          <option value="school">School</option>
          <option value="friends">Friends</option>
          <option value="family">Family</option>
        </Select>
      </FormControl>

      <Button colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>
    </DIV>
  );
};

export default AddContact;

const DIV = styled.div`
  padding: 25px;
  border-radius: 15px;
  color: #03051a;
  background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);
`;