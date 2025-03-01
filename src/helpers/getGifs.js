
export const getGifs = async (category, cant) => {
    
    const apiKey = "fww99iX70sEXZQ6Yz86q10g4UTKhtLil";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${cant}`;

    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));
  
    return gifs;
  };
  