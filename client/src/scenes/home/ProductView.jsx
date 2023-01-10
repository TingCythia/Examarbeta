import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const ProductView = () => {
  

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={5}>
      
      <Grid item xs={6} md={4}>
        <Item>our besta Products 
        <ButtonBase sx={{ width: 128, height: 128 }}>
            < img alt =""src="/client/src/assets/dishes-g80cd9a576_1920.jpg" />
          </ButtonBase> 
          </Item>
      </Grid>


      <Grid item xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>

      <Grid item xs={6} md={4}>
        <Item>xs=6 md=4</Item>
      </Grid>
      
      
    </Grid>
  </Box>
  );
};

export default ProductView;



