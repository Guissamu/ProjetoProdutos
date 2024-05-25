import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

export default function TelaFormulario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');
    const navigate = useNavigate();

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSexoChange = (event) => {
        setSexo(event.target.value);
    };

    const handleFinalizarCompra = () => {
        const compra = {
            nome,
            email,
            sexo
        };
        if(nome === '' || email === '' || sexo === ''){
            alert('Preencha os campos necessários!');
        }
        else{
            navigate('/FinalizarCompra', { state: compra });
        }
    };

    return (
        <Box
            component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '100%' },  }} noValidate autoComplete="off" >
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        required
                        id="nome"
                        label="Nome"
                        fullWidth
                        value={nome}
                        onChange={handleNomeChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        required
                        id="email"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="sexo"
                            label="Sexo"
                            value={sexo}
                            onChange={handleSexoChange}
                        >
                            <MenuItem value={"Masculino"}>Masculino</MenuItem>
                            <MenuItem value={"Feminino"}>Feminino</MenuItem>
                            <MenuItem value={"Outro"}>Outro</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'right'}>
                    <Box>
                        <Typography variant='bold'>Total: {}
                            <Button variant="contained" onClick={handleFinalizarCompra} disableElevation fullWidth sx={{ marginTop: '20px', backgroundColor: '#ff9800', fontWeight:'bold' }}>
                                FINALIZAR COMPRA
                            </Button>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
