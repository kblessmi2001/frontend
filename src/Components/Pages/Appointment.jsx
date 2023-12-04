import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Calendar from "react-calendar"

const Appointment = () => {
  return (
    <div>
      <Heading>Appointment</Heading>
      <Flex >
        <div style={{width:"40%",marginTop:"50px",border:"2px solid black",backgroundColor:"#C8C8C8",marginLeft:"30px",height:"200px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
        <Calendar/>
        </div>
        <div>

        </div>
      </Flex>


      
    </div>
  )
}

export default Appointment
