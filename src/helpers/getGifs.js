/** @format */

export const getGif = async (categorie) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categorie
  )}&limit=20&api_key=CLEQp1OaLyKEL2wt6kbI1HFY1ZSFZlMp`;
  const response = await fetch(URL);
  const { data } = await response.json();
  const record = data ? data : [];

  const gits = record.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gits;
};
