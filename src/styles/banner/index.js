import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Colors } from "../theme";
import { Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px',
    background: Colors.light_gray,
    [theme.breakpoints.up('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerImage = styled('img')(({ src, theme }) => ({
    backgroundImage: `url(${src})`,
    width: '1508px',
    marginLeft:'-25px'  ,  
    [theme.breakpoints.down('md')]: {
        width: '620px',
    },
    [theme.breakpoints.down('sm')]: {
        width: '400px',
        height: '220px'
    },
}));

export const BannerContent = styled(Box)(()=>({
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxWidth:400,
    padding:'50px',
    
}));

// export const BannerTitle = styled(Typography)(({ theme }) => ({
//     lineHeight:1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     maxWidth: 400,
//     padding: '30px',
//     [theme.breakpoints.up('sm')]: {
//         fontSize: '45px'
//     }
// }));

// export const BannerDescription = styled(Typography)(({ theme }) => ({
//     lineHeight: 1.25,
//     letterSpacing:1.25,
//     marginBottom:"3em",
//     justifyContent: 'center',
//     maxWidth:400,
//     padding: '30px',
//     [theme.breakpoints.down('md')]: {
//         lineHeight: 1.25,
//         letterSpacing:1.15,
//         marginBottom:"1.5em",
//     }
// }));


