import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FormularioRest = () => {

    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            axios.get(`https://reqres.in/api/users/${parametros.id}`).then(
                resposta => setnomeRestaurante(resposta.data.nome)
            )
        }
    }, [parametros.id])

    const [nomeRestaurante, setnomeRestaurante] = useState('')

    const aoSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();


        if (parametros.id) {
            axios.put(`https://reqres.in/api/users/${parametros.id}`,{
                nome: nomeRestaurante,
            }).then(resposta => {
                alert()
                console.log('enviar dados')
                console.log(resposta)
            })
            
        } else {
            axios.post('https://reqres.in/api/users/',{
                nome: nomeRestaurante,
            }).then(resposta => {
                alert('sucesso')
                console.log('enviar dados')
                console.log(resposta)
            })
            
        }

    }

    return (
        <form action="" onSubmit={aoSubmitForm}>
            <TextField id="standard-basic" label="Standard" variant="standard" value={nomeRestaurante} onChange={evento => setnomeRestaurante(evento.target.value)} />
            <Button variant="contained" type="submit">Salvar</Button>
        </form>
    )
}

export default FormularioRest;