import { starLoadingGifs, setGifs } from "./gifsSlices";

const apiKey = "LgaJ9eAug9N6NEm0zqFsfZZ8nYR67qoc";

export const getGifs = (category, cant) => {
  return async (dispatch, getState) => {
    
    dispatch(starLoadingGifs());

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${cant}`;
    console.log('estoy mandando aca desde el thunk', url);

    const resp = await fetch(url);
  
    const { data } = await resp.json();

    const Gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium?.url,
    }));

    console.log('estos son los gifs que mando',Gifs);
    
    dispatch(setGifs(Gifs ));
  };
};
