import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar';
import AccordionDash from '../components/AccordionDash';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { styled } from '@mui/material/styles';

function Home() {

  const CustomDiv = styled('div')(({ theme }) => ({
    backgroundColor: '#F0F0F0',
    padding: theme.spacing(2),
  }));

  const handleButtonClick = async () => {
    try {
      // Fazendo a requisição GET para a API
      const response = await fetch('https://ab.g.globo/choose?experiments=HOME-AREA-COLUNA-ESPORTE-user');
      const data = await response.json();

      // Exibindo o resultado em um alert
      alert(`Dados da API: ${JSON.stringify(data)}`);
    } catch (error) {
      // Tratamento de erros
      alert('Erro ao buscar dados da API');
    }
  };

  return (
    <>
      <CustomDiv>
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav></Sidenav>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction={"row"}>
                  <Card sx={{ minWidth: 49 + "%", height: 150, backgroundImage: 'linear-gradient(45deg, #4A90E2, #87CEFA)' }} className='gradient'>
                    <CardContent>
                      <div>
                        <CreditCardIcon sx={{ color: '#3A7ACD' }} />
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        $500.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Earnings
                      </Typography>

                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 49 + "%", height: 150, backgroundImage: 'linear-gradient(45deg, #4A90E2, #87CEFA)' }} className='gradient'>
                    <CardContent>
                      <div>
                        <ShoppingBagIcon sx={{ color: '#3A7ACD' }} />
                      </div>
                      <Typography gutterBottom variant="h5" component="div">
                        $900.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                        Total Orders
                      </Typography>

                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345, backgroundImage: 'linear-gradient(45deg, #4CAF50, #A8E6CF)' }}>
                    <Stack spacing={2} direction={"row"}>
                      <div className='iconstyle'>
                        <StorefrontIcon sx={{ color: 'green' }} />
                      </div>
                      <div className='paddingall'>
                        <span className='pricetitle'>$203k</span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345, backgroundImage: 'linear-gradient(45deg, #4CAF50, #A8E6CF)' }}>
                    <Stack spacing={2} direction={"row"}>
                      <div className='iconstyle'>
                        <StorefrontIcon sx={{ color: 'green' }} />
                      </div>
                      <div className='paddingall'>
                        <span className='pricetitle'>$203k</span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent>
                    <div className='paddingall'>
                      <span className='pricetitle'>Popular Products</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Button variant="contained" onClick={handleButtonClick}>Request</Button> {/* Adicionando o botão */}
          </Box>
        </Box>
      </CustomDiv>
    </>
  )
}

export default Home