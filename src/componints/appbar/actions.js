import { Divider } from "@mui/material";
import { MyList ,ActionsIconsContainerDesktop, ActionsIconsContainerMobile } from "../../styles/appbar";
import PersonIcon from '@mui/icons-material/Person';
import FavoritIcon from '@mui/icons-material/Favorite';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Colors } from "../../styles/theme";
import { BottomNavigationAction } from '@mui/material';


export default function Actions({matches}){
    const Component = matches 
    ? ActionsIconsContainerMobile
     : ActionsIconsContainerDesktop ;

    return(
        <Component>
             <MyList type= "row" >                    
                 <BottomNavigationAction label="Cart" icon={<PersonIcon/>} 
                 sx={{                 
                    color :matches && Colors.secondary               
                }}
                 />
            <Divider orientation="vertical"variant="middle" flexItem />            
                <BottomNavigationAction label="Cart" icon={<FavoritIcon/>} 
                 sx={{                 
                    color :matches && Colors.secondary               
                }}
                 />                       
            <Divider orientation="vertical"variant="middle" flexItem />            
            <BottomNavigationAction label="Cart" icon={<LocalMallIcon/>} 
                 sx={{                 
                    color :matches && Colors.secondary               
                }}
                 /> 
        </MyList>
        </Component>
    );
}
       
