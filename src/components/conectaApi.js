 export async function getVideo() {
    const conexao = await fetch('https://my-json-server.typicode.com/Caduqui/aluraFlix-api/videos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}