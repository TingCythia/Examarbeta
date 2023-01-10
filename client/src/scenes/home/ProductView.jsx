import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import {Box,useMediaQuery} from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Item = styled(Paper)(({ theme }) => ({
  
    backgroundColor: theme.palette.mode === '' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    
  }));

const ProductView = () => {

  return (
    
    
    <Box sx={{ flexGrow: 1 }}>

<Box width="80%" margin="80px auto">
    <Typography variant="h2" textAlign="center" fontFamily="sans-serif">
      Our   <b>Products</b>
    </Typography>

    <Tabs
      textColor="primary"
      indicatorColor="primary"
      sx={{
        m: "5px",
        "& .MuiTabs-flexContainer": {
          flexWrap: "wrap",
        },
      }}
    >
     
   
    
    </Tabs>

    <Grid container spacing={5}>
      
      <Grid item xs={6} md={4}>
        <Item>      <Tab label="NEW ARRIVALS"  sx={{ fontSize: 17 , color:"#AF1F23"}}value="newArrivals" />
        <ButtonBase sx={{ width: 228, height: 228 }}>
            < img alt =""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyrwX06_qCnjEk3DDzkg7Osk80GixFEKmYo3g5u1S5o9Na1lD1BintzenAiY10iVwSF8&usqp=CAU" />
          </ButtonBase> 
          </Item>
      </Grid>


      <Grid item xs={6} md={4}>
        <Item>
      <Tab label="BEST SELLERS"  sx={{ fontSize: 17,color:"#AF1F23" }}value="bestSellers" />
        <ButtonBase sx={{ width: 228, height: 228 }}>
        < img alt =""src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAkUysJ3Ms3PR0URiTAWuyH91JVYNFfGB2hg&usqp=CAU"
        	
      
        />
        </ButtonBase> 
 </Item>


      </Grid>

      <Grid item xs={6} md={4}>
        <Item>  <Tab label="TOP RATED" sx={{ fontSize: 17,color:"#AF1F23" }} value="topRated" />
        <ButtonBase sx={{ width: 228, height: 228 }}>
    
        < img alt =""src="    https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQT_Ysbc_2tcQYK-4SgHiR4MEwhBHafFuCgw&usqp=CAU" />
        </ButtonBase>

        </Item>
      </Grid>
      
      
    </Grid>
  </Box> </Box>
  );
};

export default ProductView;



