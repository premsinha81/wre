import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CusButton2 = ({name,color,bgcolor,size,onClick}) => {
  return (
    <Button className="cusmy rounded-pill"  sx={{fontWeight:"100",opacity:".92",bgcolor:`${bgcolor}`,color:{color},":hover":{opacity:"1",bgcolor:`${bgcolor}`}}} size='small'>
    <Typography sx={{fontSize:`${size}`,height:"100%",width:"100%",textTransform:"capitalize"}}>{name}</Typography>
  </Button>
  )
}

export default CusButton2