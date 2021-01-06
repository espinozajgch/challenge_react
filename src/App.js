import React, { useState } from 'react'
import Form from './form';
import List from './List';
import Bar from './Bar';
import AppModal from './AppModal';
import Container from '@material-ui/core/Container';

function App() {
  
  //HOOKS
  const [state, setState] = useState({
    loading: false,
    error: false,
    user: []
  })

  const handleCloseModal = () => {
    setState({
      ...state,
      error : false
    })
  };

  const searcher = (rutState) => {
    const url = 'http://localhost:8080/reverse_rut';
    
    fetch(`${url}?rut=${rutState}`)
      .then(res => res.json())
      .then(res => { 

        if(!!res.result){
          if(res.result.length > 0){
            setState({
              ...state,
              user : res.result,
              error : false
            })
          }
          else{
            setState({user : {nombre :'', apellido :'', fecha_nac : '', idPersona : ''} })
          }
        }
        else{
          if(!!res.error)
            setState({
              ...state,
              error : true
            })
        }  
      })
  }

  return (
    <div>
      <Bar></Bar>
      <Container component="main" maxWidth="sm">
        <Form handleClick={searcher}></Form>
      </Container>

      {state.user.length > 0 ? 
        <List resultado={state.user} ></List> : null      
      }

      <AppModal openError={state.error}  closeModal={handleCloseModal}></AppModal>

    </div>
  );
}

export default App;
