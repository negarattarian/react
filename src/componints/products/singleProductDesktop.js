import { Stack } from "@mui/material";
import { Product,
     ProductActionButton,
     ProductActionsWrapper,
     ProductAddToCart,
     ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";


export default function SingleProductDesktop({product,matches}){

    const [showOptions, setshowOptions]= useState(false);
    const [ProductDetailDialog,
         showProductDetailDilog]
    = useDialogModal(ProductDetail)

    const handleMouseEnter = () => {
        setshowOptions(true);
    }
    const handleMouseLeave = () => {
        setshowOptions(true);
    }


    return(
        <>
    <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image}/>
        <ProductFavButton isFav={0}  >
           <FavoriteIcon/>
            </ProductFavButton>

            {showOptions && (
             <ProductAddToCart show={showOptions}  variant="contained">
                Add to cart
                </ProductAddToCart>
            )}
        <ProductActionsWrapper show={showOptions}>
            <Stack direction="column">
                <ProductActionButton>
                    <ShareIcon color="primary"/>
                </ProductActionButton>
                <ProductActionButton onClick={()=> showProductDetailDilog()}>
                    <FitScreenIcon  color="primary"/>
                </ProductActionButton>
            </Stack>
        </ProductActionsWrapper>
    </Product>
     <ProductMeta product={product} matches={matches} />
     <ProductDetailDialog product={product}  />   

        </>
   
    )

}
