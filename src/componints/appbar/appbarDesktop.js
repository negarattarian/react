import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { ActionsIconsContainerDesktop, ActionsIconsContainerMobile, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({matches}){

    const{setShowSearchBox} =useUIContext();


    return (
         <AppbarContainer>
        <AppbarHeader>Fashion </AppbarHeader>
            <MyList type='row'>
                <ListItemText primary= "Home" />
                <ListItemText primary= "Categories" />
                <ListItemText primary= "Products" />
                <ListItemText primary= "Contact Us" />
                <ListItemButton onClick={()=> setShowSearchBox(true)}>
                    <ListItemIcon  >
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Actions matches={matches}  />
            </MyList>
        </AppbarContainer>     
        
    );
}
