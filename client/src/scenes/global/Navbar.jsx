import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutlined,
  ShoppingBagOutlined,
  MenuOutlined,
  
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="90px"
      backgroundColor="#dcdada"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[600]}
          fontSize={[27]}
          fontFamily={["serif"]}
        >
          ANOSHE 
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
      
        >
          <IconButton sx={{ color: "black"  }}>
           
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutlined  sx={{ fontSize: 27 }}/> 
          </IconButton>

          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined  sx={{ fontSize: 27 }}/>
            </IconButton>
          </Badge>

          <IconButton sx={{ color: "black" }}>
         
            <MenuOutlined sx={{ fontSize: 27 }} />
         
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
