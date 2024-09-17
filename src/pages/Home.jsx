import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Home() {

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
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav></Sidenav>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
          <Button variant="contained" onClick={handleButtonClick}>Request</Button> {/* Adicionando o botão */}
        </Box>
      </Box>
    </>
  )
}

export default Home