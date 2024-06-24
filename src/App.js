import { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import theme from './styles/theme';
import { ThemeProvider } from '@mui/system';
import Appbar from './componints/appbar';
import Banner from './componints/banner';
import Prodocts from './componints/products'
import Footer from './componints/footer';
import AppDrawer from './componints/drawer';
import { UIProvider } from './context/ui';
import SearchBox from './componints/search';
  

function App() {

  useEffect(()=>{
    document.title="react";
  },[]);

  return (
    <ThemeProvider theme={theme}>
      <Container
    maxWidth="xl"
    sx={{
      background:'#fff',
    }}
    >      
        <UIProvider>
          <Appbar/>
          <Banner/>
          <Box display="flex" justifyContent={"center"} sx={{p:4}}>
            <Typography variant='h4'>Our Products</Typography>
          </Box>
          <Prodocts/>
          <Footer/>
          <AppDrawer/> 
          <SearchBox/>         
        </UIProvider>     
    </Container> 
    </ThemeProvider>
  );
}

export default App;
