import { Divider, Drawer, List, ListItemButton, ListItemText, lighten } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { styled } from "@mui/system";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from '@mui/icons-material/Close';
import { Colors } from "../../styles/theme";



const MiddleDivider = styled ((props) =>(
    <Divider variant="middle" {...props} />
))``;

export default function  AppDrawer(){
    const { drawerOpen, setDrawerOpen } = useUIContext();
    
    return(
        <>
            {drawerOpen && (
             <DrawerCloseButton onClick={()=> setDrawerOpen(false)}>
                <CloseIcon className="testing"
                sx={{
                    fontSize:'2.5',
                    color:(Colors.white)
                }}
                />
             </DrawerCloseButton>
            )}
            <Drawer  open={drawerOpen}>
            <List>
                <ListItemButton>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Categories</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Products</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>About Us</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
                <ListItemButton>
                    <ListItemText>Contact Us</ListItemText>
                </ListItemButton>
                <MiddleDivider/>
            </List>
        </Drawer>
        </>
    )
}
