export const getData = async (num: number) => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${num}`
  );
  const data = await response.json();
  return data;
};
