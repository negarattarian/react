
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./actions";


export default function AppDrawer({ matches }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();

    

    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                Fashion
            </AppbarHeader>
            <IconButton>
                <SearchIcon onClick={()=> setShowSearchBox(true)} />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}

