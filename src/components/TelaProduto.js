import React from 'react';
import { produtos } from './functions/Produto';
import QuantityInput from './functions/QuantityInput';
import TelaFormulario from './form/Formulario';
import { Grid, Box, Typography, Button } from '@mui/material';

const TelaProdutos = () => {

  const listaProdutos = produtos.map((p, i) => {
    return (
      <Grid item xs={12} sm={6} md={3} sx={{marginBottom:'70px', alignItems:'flex-end'}} key={i}>
        <Box className="produto" padding={'15px'}>
          <img src={p.img} alt={p.titulo} className='imgProduto' />
          <Box display={'flex'} flexDirection={'column'} className='descricao' textAlign={'left'}>
            <Typography>{p.titulo}</Typography>
            <Typography variant="h5" fontWeight={'bold'}>R$ {p.valor.toFixed(2)}</Typography>
            <Typography variant='caption'>
              {p.descricao}<br />
              {p.vista}
            </Typography>
            <Box sx={{marginTop:'10px', display:'none'}} className='menuAdicionar'>
              <QuantityInput />
              <Button variant="contained" disableElevation fullWidth sx={{ marginTop: '20px', fontWeight:'bold' }} >
                Adicionar
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{maxWidth:'90vw', margin:'30px auto'}}>
        <Typography variant="h5" sx={{ textAlign: 'left' }}>Produtos:</Typography><hr />
        <Grid container spacing={3}>
          {listaProdutos}
        </Grid>
        <Typography variant="h5" sx={{ textAlign: 'left', fontWeight:'bold' }}>Dados do Cliente:</Typography><hr />
        <TelaFormulario />
      </Box>
    </>
  );
}

export default TelaProdutos;