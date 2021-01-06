import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    table: {
      margin: theme.spacing(2)
    }
  }));

function List(props) {
    const classes = useStyles();

    return (
        <Container  component="main" maxWidth="xs">
            
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Apellido</TableCell>
                        <TableCell align="center">Fecha de Nacimiento</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={props.resultado[0].idPersona}>
                            <TableCell align="center">{props.resultado[0].nombre}</TableCell>
                            <TableCell align="center">{props.resultado[0].apellido}</TableCell>
                            <TableCell align="center">{props.resultado[0].fecha_nac}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
           
        </Container>
    );
  }
  
  export default List;