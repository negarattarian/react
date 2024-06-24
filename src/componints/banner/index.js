import {  useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerImage } from "../../styles/banner";


export default function Banner(){
    const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('md'));

      return(
        <BannerContainer>
        <BannerImage src="/images/banner/banner2.png"/>
        </BannerContainer>
      );


}
