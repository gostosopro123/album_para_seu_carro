function Lista({albuns, busca, setBusca }) {
    return (
        <>
        <h2>Álbuns cadastrados</h2>
        
        <input 
        placeholder="Buscar por título... " 
        value= {busca}
        onChange={(e) => setBusca(e.target.value)}
        />

        {albuns.length === 0? (
            <p>Nenhum item encontrado</p>
        ) : (
            <ul>
                {albuns.map((album) => (
                    <li key={album.id}>
                        {album.titulo} artista {album.artista} avaliacao {album.avaliacao}
                    </li>
                ))}
            </ul>
        )}
    </>
    );
}

export default Lista;