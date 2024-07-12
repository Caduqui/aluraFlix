import axios from "axios";

const api = axios.create({
    baseURL: "https://66917c2826c2a69f6e8fe30d.mockapi.io",
});

export const getVideos = async () => {
    try {
        const response = await api.get("/videos");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar videos", error);
        throw error;
    }
}

async function criaCard(titulo, capa, link, categoria) {
    try {
        const response = await api.post("/videos", {
            titulo,
            capa,
            link,
            categoria
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao criar card", error);
        throw error;
    }
}

async function deletaCard(id) {
    try {
        const response = await api.delete(`/videos/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao deletar card", error);
        throw error;
    }
};

async function atualizaCard(id, titulo, capa, link, categoria) {
    try {
        const response = await api.put(`/videos/${id}`, {
            titulo,
            capa,
            link,
            categoria
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar o card", error);
        throw error;
    }
}

export const conectaApi = {
    getVideos,
    criaCard,
    deletaCard,
    atualizaCard
}