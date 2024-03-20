import { Box, List, ListItem } from '@mui/material'
import React from 'react'

const Dropdown = ({handleDelete, id, user_id, name1, name2, name3,onclicked }) => {

  return (
    <Box sx={{ p: "10px 1px", bgcolor: "#fff", color: "#000" }} className="rounded rounded-2">
      <List className="p-0">
        <ListItem   onClick={onclicked} sx={{ borderBottom: "1px solid #fff", cursor: "pointer" }}>{name1}</ListItem>
        <ListItem sx={{ borderBottom: "1px solid #fff", cursor: "pointer" }}>{name2}</ListItem>
        <ListItem onClick={(e)=>{handleDelete(id, user_id)}} sx={{ borderBottom: "1px solid #fff", cursor: "pointer" }}>{name3}</ListItem>
      </List>
    </Box>
  )
}

export default Dropdown;