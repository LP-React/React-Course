export const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=NrdEOK7JOCmGWTQNgTottsgcNcdFn6UX&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //Retorna un arreglo con datos de cada GIF
    const gifs = data.map(gifInfo => ({
        id: gifInfo.id,
        title: gifInfo.title,
        url: gifInfo.images.downsized_medium.url
    }))

    return gifs;
}