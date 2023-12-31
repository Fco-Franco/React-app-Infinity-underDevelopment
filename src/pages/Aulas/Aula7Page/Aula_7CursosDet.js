import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Aula7.css';

function Aula_7CursosDet() {
    document.title = "Aula7 Cursos Det";

    const params = useParams()

    const [curso, setCurso] = useState({})

    useEffect(() => {
        if (params.id === "programacao") {
            setCurso({
                titulo: "Curso Dev Full Stack",
                subtitulo: "Do 0 ao profissional Dev",
                descricao: "Para quem quer entrar nas profissões de desenvolvimento de sistemas, aplicativas, inteligência artificial e Web. Do Front end ao Back end.",
                duracao: 14,
            })

        } else if (params.id === "data") {
            setCurso({
                titulo: "Curso Programação Cientista de Dados",
                subtitulo: "TORNE-SE UM ESPECIALISTA EM DADOS COM PYTHON",
                descricao: "ENTRE NA ÁREA MAIS BEM PAGA DA PROGRAMAÇÃO E TORNE UM ESPECIALISTA EM DATASCIENCE AVANÇADO",
                duracao: 10,
            })
        }
    }, [params.id]);

    return (
        <>
            <h2>Aula 7 - Detalhes do curso</h2><br/> 
            <h2>{curso.titulo}</h2><br/>
            <h3>{curso.subtitulo}</h3><br/>
            <p>{curso.descricao}</p>
            <p>Duração: {curso.duracao} meses</p>
        </>

    )
}

export default Aula_7CursosDet