async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaCard(titulo, capa, link, categoria) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            capa: capa,
            link: link,
            categoria: categoria
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletaCard(id) {
    const conexaoId = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!conexaoId.ok) {
        throw new Error (`Erro ao excluir o produto: ${conexaoId.status}`);
    }

    const data = await conexaoId.json()
    return data;
}

async function atualizaCard(id, titulo, capa, link, categoria) {
    const conexao = await fetch(`http://localhost:3000/videos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo,
            capa,
            link,
            categoria
        }),
    });
    if (!conexao.ok) {
        throw new Error (`Erro ao atualizar o card: ${conexao.status}`);
    }

    const data = await conexao.json();
    return data;
}

export const conectaApi = {
    listaVideos,
    criaCard,
    deletaCard,
    atualizaCard
}