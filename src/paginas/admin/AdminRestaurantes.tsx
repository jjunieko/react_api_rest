import { Paper, Table, TableCell, TableHead, TableRow, TableContainer, TableBody, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IRestaurante from "../../interfaces/IRestaurante";


const AdminRestaurantes = () => {

    const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get<IRestaurante[]>('https://reqres.in/api/users/')
            .then(resposta => setRestaurantes(resposta.data))
    }, [])

    const excluirItem = (restauranteAhserExcluido: IRestaurante) => {
            axios.delete(`https://reqres.in/api/users/${restauranteAhserExcluido.id}`).then(() => {
                const listaRestaurante =  restaurantes.filter(restaurante => restaurante.id !== restauranteAhserExcluido.id)
                setRestaurantes([...listaRestaurante])
            })
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Nome
                        </TableCell>
                        <TableCell>
                            Editar
                        </TableCell>
                        <TableCell>
                            Excluir
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurantes.map(restaurante =>
                        <TableRow key={restaurante.id}>
                            <TableCell>
                                {restaurante.nome}
                            </TableCell>
                            <TableCell>
                                <Link to={`admin/resturantes/${restaurante.id}`}>Editar</Link>
                            </TableCell>
                            <TableCell>
                                <Button  onClick={() => excluirItem(restaurante)}>
                                   Excluir 
                                </Button>
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default AdminRestaurantes;