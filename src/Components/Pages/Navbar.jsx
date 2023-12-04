import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NAVBAR>
      <Link to="/">
        <Heading>Contact Management</Heading>
      </Link>
      <Link to="/appoinment">
        <Heading>Appoinment</Heading>
      </Link>
    </NAVBAR>
  );
};

export default Navbar;

const NAVBAR= styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1%;
    background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);
    color: whitesmoke;
`