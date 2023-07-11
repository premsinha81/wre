import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CusButton = ({name,color,bgcolor,size,onClick}) => {
  return (
    <Button className="d-flex justify-content-center align-items-center rounded-pill" type='submit' onClick={onClick} sx={{fontWeight:"100",opacity:".92",px:"15px",textTransform:"capitalize",py:"4px",bgcolor:`${bgcolor}`,color:{color},":hover":{opacity:"1",bgcolor:`${bgcolor}`}}} size='small'>
      <Typography sx={{fontSize:`${size}`,height:"100%"}}>{name}</Typography>
    </Button>
  )
}

export default CusButton