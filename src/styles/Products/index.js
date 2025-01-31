
import { styled } from "@mui/system";
import { Colors } from "../theme";
import { Button, IconButton, Box } from "@mui/material";
import { slideInBottom, slideInRight } from '../../animation';

export const Product = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        position: 'relative'
    }
}));

export const ProductImage = styled('img')(({ src, theme }) => ({
    src: `url(${src})`,
    width: '100%',
    // padding: '10px',
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: '20px'
    }
}));

export const ProductActionButton = styled(IconButton)(() => ({
    background: Colors.white,
    margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton,{
    shouldForwardProp: (prop) => prop !=='isFav'
})(({ isFav, theme }) => ({
    color: isFav ? Colors.primary : Colors.light,
    margin:'5px 8px',
    [theme.breakpoints.up("md")]: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
}));

export const ProductAddToCart = styled(Button,{
    shouldForwardProp: (prop) => prop !== 'show'
})(({ show, theme }) => ({
    width: '120px',
    fontSize: '12px',
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        bottom: '2%',
        width: '300px',
        padding: '10px 5px',
        animation: show && `${slideInBottom} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
    },
    background: Colors.secondary,
    opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
    padding: 4,
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
}));

export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: show ? "visible" : "none",
        position: 'absolute',
        right: 0,
        top: "20%",
        animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)`
    },
}));
