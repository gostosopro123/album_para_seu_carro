function Formulario({
    titulo, setTitulo,
    artista, setArtista,
    ano, setAno,
    avaliacao, setAvaliacao,
    erro,
    onCadastrar,
}) {
    return (
        <>
        <form onSubmit={onCadastrar} noValidate>
            <input 
            placeholder="Titulo"
            value={titulo}
            onChange={(e)=> setTitulo(e.target.value)}
            />
            <input 
                placeholder="Artista"
                maxLength={100}
                value={artista}
                onChange={(e) => setArtista(e.target.value)}
            />
            <input 
                placeholder="Ano (1900-2026)"
                type= "number"
                value = {ano}
                onChange={(e) => setAno(e.target.value)}
            />
            <input 
                placeholder="Avaliação (0-10)"
                type= "number"
                step={0.1}
                value={avaliacao}
                onChange={(e) => setAno(e.target.value)}
                 />
            <button type="submit"> Cadastrar </button>
        </form>

        {erro && <p style={{ color: "red" }}> {erro}</p>}

        </>
    );
}

export default Formulario;