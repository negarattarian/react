import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import "@fontsource/montez";
import {  IconButton, List, Typography } from "@mui/material";
import { Colors } from "../theme";

//Container
export const AppbarContainer = styled(Box)(()=>({
    
    display:'flex',
    marginTop:4,
    justifyContent:'center',
    alignItems:'center',
    padding:'2px 8px'

}));


//Header
export const AppbarHeader = styled(Typography)(() => ({

     padding:'5px',
     flexGrow:1,
     fontSize:"4em",
     fontFamily:'"Montez","cursive"',
     color: Colors.black,
     marginLeft:"15px"


}));

export const MyList = styled(List)(({type})=>({

    display: type == 'row' ? 'flex' : 'block',
    flexGrow:4,
    justifyContent:'center',
    alignItems: 'center'
}))

export const ActionsIconsContainerMobile = styled(Box)(() => ({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: "100%",
    alignItems: 'center',
    zIndex: 99,
    borderTop: `0px solid ${Colors.border}`,
}));


export const ActionsIconsContainerDesktop = styled(Box)(()=>({
       
       flexGrow:0

}));
 

export const DrawerCloseButton = styled(IconButton)(() =>({
    position:'absolute',
    top:10,
    left:'250px',
    zIndex:1999
}));
