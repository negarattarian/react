import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../styles/Products";
import ProductMeta from "./productMeta";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";

export default function SingleProduct({ product, matches }) {
    const [ProductDetailDialog, showProductDetailDialog,  ] = useDialogModal(ProductDetail);

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={() => showProductDetailDialog()}>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    );
}
