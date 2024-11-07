export const photoList = await fetch(
  "http://127.0.0.1:3000/photos?_page=1&_limit=10"
).then((res) => res.json());

export async function getPhotos(url) {
  const res = await fetch(url);
  return res.json();
}
