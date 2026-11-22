import { useState, useEffect } from "react";

const API = "http://127.0.0.1:8000/api/albuns/";

function App() {
    const [albuns, setAlbuns] = useState([]);
    const [resumo, setResumo] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [artista, setArtista] = useState("");
    const [avaliacao, setAvaliacao] = useState("");
    const [ano, setAno] = useState("");
    const [erro, setErro] = useState("");
    const [busca, setBusca] = useState("");


    function carregarAlbuns() {
        fetch(API)
            .then(Response => Response.json())
            .then(dados => setAlbuns(dados))
            .catch(erro => console.log("Erro:", erro));

        fetch(API + "resumo/")
            .then((resposta) => resposta.json())
            .then((dados) => setResumo(dados))
            .catch((erro) => console.log("Erro:", erro));

    }
    useEffect(() => {
        carregarAlbuns();
    }, []);


    function cadastrar(evento) {
        evento.preventDefault();

        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                titulo,
                artista,
                ano: ano === "" ? null : Number(ano),
                avaliacao: avaliacao === "" ? null : Number(avaliacao)
            }),
        })
            .then(async (resposta) => {
                const dados = await resposta.json();

                if (resposta.status === 400) {
                    setErro(dados.erro);
                    return;
                }
                setErro("")
                setTitulo("");
                setArtista("");
                setAvaliacao("");
                setAno("");
                carregarAlbuns();
            })
            .catch(erro => console.log("Erro", erro))
    }
    const albunsFiltrados = albuns.filter((album) =>
        album.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    return (
        <div className="pagina">
            <h1>Cadastro de albuns</h1>

            <form onSubmit={cadastrar} noValidate>
                <input
                    placeholder="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                />
                <input
                    placeholder="Artista"
                    maxLength={100}
                    value={artista}
                    onChange={(e) => setArtista(e.target.value)}
                    required
                />
                <input
                    placeholder="Ano (1900,2026.)"
                    type="number" min={1900}
                    number max={2026}
                    value={ano}
                    onChange={(e) => setAno(e.target.value)}
                    required
                />
                <input
                    placeholder="Avalição (1 ou 10)"
                    type="number" min={0}
                    number max={10}
                    step={0.1}
                    value={avaliacao}
                    onChange={(e) => setAvaliacao(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>
            {erro && <p style={{ color: "red" }}>{erro}</p>}

            {resumo && (
                <p>
                    Total: {resumo.total} | Média: {resumo.media_avaliacao} | Melhor:{" "}
                    {resumo.melhor}
                </p>
            )}

            <h2>Albuns cadastrados</h2>

            <input
                placeholder="Buscar por título..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
            />


            {albunsFiltrados.length === 0 ? (
                <p>Nenhum item encontrado</p>
            ) : (
                <ul>
                    {albunsFiltrados.map((album) => (
                        <li key={album.id}>
                            {album.titulo} · artista {album.artista} · avaliação {album.avaliacao}
                        </li>
                    ))}
                </ul>
            )}
// e o fim do arquivo:
        </div>
    );
}
export default App;