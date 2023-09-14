async function productsLoader(productsToShow) {
  console.log(productsToShow);
  let response = null;
  if (productsToShow > 0) {
    response = await fetch(
      `https://fakestoreapi.com/products?limit=${productsToShow}`
    );
  } else {
    response = await fetch("https://fakestoreapi.com/products");
  }
  if (!response.ok) {
    //review this and use json() instead?
    throw new Response("Error");
  } else {
    return response;
  }
}

export default productsLoader;
