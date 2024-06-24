import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { SubscribeTF } from "../../styles/footer";
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export default function Footer(){
    return(
        <Box
        sx={{
            background:Colors.shaft,
            color:Colors.white,
            p:{xs:4 , md:10},
            pt:12,
            pb:12,
            fontSize:{xs: '12px' , md:'14px'}
        }}
        >

            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">About us</FooterTitle>
                <Typography variant="caption2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Typography>

                <Box sx={{
                    mt:4,
                    color:Colors.dove_gray
                }}>
                    <FacebookIcon sx={{mr:1}} />
                    <TwitterIcon sx={{mr:1}} />
                    <InstagramIcon  />
                </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Abut Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                            Order Tracking 
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                            Privary &amp; Policy                            
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                 Terms &amp; Conditions                            
                            </Typography>
                        </ListItemText>
                    </List>
                    
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">my account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart 
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                               My Account 
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                 Whishlist                            
                            </Typography>
                        </ListItemText>
                    </List>
                    
                </Grid>
            <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1" justifyContent="center">my account</FooterTitle>
                    <Stack>
                    <TextField  
                     label="Email address" variant="standard" color="primary"/>
                        <Button
                        startIcon={<SendIcon  sx={{color:Colors.white}} />}
                        sx={{ mt:4, mb: 4 }}
                        variant="contained">
                        Subscribe
                        </Button>
                    </Stack>
                </Grid>                

            </Grid>

        </Box>
    )
}
