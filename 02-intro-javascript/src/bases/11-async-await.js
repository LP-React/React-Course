const getImagenPromesa = async () => {
    try {
        const apiKey = 'xeRehO6g8bbEuJtrt7sx5AsrXJXnxvGZ'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        let img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch(err) {
        console.error(err)
    }
}

getImagenPromesa()


