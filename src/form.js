import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    table: {
      margin: theme.spacing(2)
    }
  }));

function Form(props) {
    const classes = useStyles();

    const [rutState, setRutState] = useState({
        rut: ''
    })

    const handleChange = (e) => {
        setRutState({
            rut: e.target.value
        })
    }

    return (
        <Container className={classes.table} component="main" maxWidth="sm">
            <Typography variant="caption">(Formato: sin puntos con guión. Ejemplo: 12345678-9)</Typography>
            <TextField  onChange={handleChange} fullWidth variant="outlined" margin="normal" required id="rut" label="RUT" name="rut" autoComplete="rut" autoFocus />
            
            <Button fullWidth variant="contained" type="button" color="primary" onClick={() => props.handleClick(rutState.rut)} >Buscar</Button>
        </Container>
    );
  }


  
  export default Form;