function Resumo({ resumo }) {
    if(!resumo) return null;

    return (
        <p>
            Total: {resumo.total} Média: {resumo.media_avaliacao} Melhor: {" "}
            {resumo.melhor }
        </p>
    );
}

export default Resumo;
