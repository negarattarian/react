import { keyframes } from "@mui/system";

export const flipHorizontalButtom = keyframes`
0% {
    -webkit-transform: rotatex(0);
             transform: rotatex(0);
}
100% {
    -webkit-transform: rotatex(-180deg);
             transform: rotatex(-180deg);
}
`;

// animation slide-in-bottom
export const slideInBottom = keyframes`
0% {
    -webkit-transform: translateY(50px);
             transform: translateY(50px);
    opacity: 0;
}
100% {
    -webkit-transform: translateY(0);
             transform: translateY(0);
    opacity: 1;
}
`;

// animation slide-in-right
export const slideInRight = keyframes`
0% {
    -webkit-transform: translateX(50px);
             transform: translateX(50px);
    opacity: 0;
}
100% {
    -webkit-transform: translateX(0);
             transform: translateX(0);
    opacity: 1;
}
`;
