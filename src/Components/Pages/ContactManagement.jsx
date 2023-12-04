import React from 'react'
import styled from 'styled-components'
import AddContact from "./AddContact"
import TableRow from './TableRow'

const ContactManagement = () => {
  return (
    <DIV>
        <div>
            <AddContact/>
        </div>
        <div>
            <TableRow/>
        </div>
    </DIV>
  )
}

export default ContactManagement

const DIV=styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);
    height: 700px;
`