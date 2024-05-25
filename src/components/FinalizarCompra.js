import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Purchase from './img/purchase.png';
import { Typography, Button, Box } from '@mui/material';


export default function FinalizarCompra() {
    const location = useLocation();
    const { nome } = location.state || {};
    const navigate = useNavigate();

    const handleVoltarCompra = () => {
        navigate('/');
    }

    return (
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh" }}>
            <Box sx={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', borderRadius: 3, padding: 3,  maxWidth:"40vw", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '30px' }}>
                    {nome},
                </Typography>
                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Sua compra no valor <span className='precoFinal'>R$ 299.00</span> foi finalizada com sucesso
                    </Typography>
                <img src={Purchase} alt="Purchase" style={{ width: '15vw', margin: '40px 0' }} />
                <Button variant="contained" onClick={handleVoltarCompra} disableElevation sx={{ backgroundColor: '#ff9800', padding: '10px 30px', fontWeight:'bold'}}>
                    INICIAR NOVA COMPRA
                </Button>
            </Box>
        </Box>
    );
}
