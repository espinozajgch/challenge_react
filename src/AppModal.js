import React from 'react'
import {Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function AppModal(props) {
    
    const classes = useStyles();
   
    return (
        <Modal 
            className={classes.modal}
            open={props.openError}
            onClose={()=>  props.closeModal()}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            <div className={classes.paper} >RUT INVALIDO</div>
        </Modal>
    );
  }

  export default AppModal;