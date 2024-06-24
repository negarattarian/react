import { TextField, Typography } from "@mui/material";
import {styled} from "@mui/system";
import { Colors } from "../theme";


export const FooterTitle =styled(Typography)(()=>({
    textTransform:"uppercase",
    marginBottom:'1em'
}));

export const SubscribeTF =styled(TextField)(() => ({
    '.MuiInputLabel-root':{

        color:Colors.white
    },

    '.MuiInput-root::before':{
        BorderBottom:`1px  solid  ${Colors.primary}`
    },
}));
