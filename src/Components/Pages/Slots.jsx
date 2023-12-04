import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Slots = () => {
    const navigate=useNavigate()
    const handleClick=(time)=>{
        alert(`Appoinment Booked for ${time}`)
        navigate('/')
    }
  return (
    <div >
        <Flex>
            <Button onClick={()=>handleClick('8:00 AM')}>8:00 AM</Button>
            <Button onClick={()=>handleClick('8:30 AM')}>8:30 AM</Button>
            <Button onClick={()=>handleClick('8:45 AM')}>8:45 AM</Button>
        </Flex>
        <Flex>
            <Button onClick={()=>handleClick('9:00 AM')}>9:00 AM</Button>
            <Button onClick={()=>handleClick('12 Noon')}>12 Noon</Button>
        </Flex>
        <Flex>
            <Button onClick={()=>handleClick('12:30 AM')}>12:30 AM</Button>
            <Button onClick={()=>handleClick('5:00 AM')}>5:00 PM</Button>
        </Flex>
        <Flex>
            <Button onClick={()=>handleClick('5:30 AM')}>5:30 AM</Button>
            <Button onClick={()=>handleClick('8:30 AM')}>8:30 PM</Button>
        </Flex>
    </div>
  )
}

export default Slots