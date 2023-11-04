# Shopping Cart Project for the Odin Project Website

- Project description link: https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart

- Live Site Link: https://ephemeral-narwhal-478443.netlify.app/

## Project Overview

The primary purpose of this project was to gain experience using the react-router library.

!['Home page'](/src/images/home.png)

!['Products page'](/src/images/producst.png)

## Project Implementation

My website has four pages: Home, Products, Cart, and Product Details. The first three pages are always displayed, but the Product Details page only shows when a specific product is selected. From there, I can add the chosen product to my cart and proceed to the Cart page.

I use three loaders to load data on the Home, Products, and Product Details pages. Each loader function is included in the same file as the page that uses it. Initially, I used one function as a loader for all three pages, but I found it easier to read and manage with three separate loaders.

I'm using the **'useState'** hook to manage the products in the cart. I have my state and functions to update state in on **'App.js'**.

`const [productsOnCart, setProductsOnCart] = useState([]);`

I calculated the total amount to pay on the cart page after products are received in the cart as a prop from **'App.js'**.

`const total = productsOnCart.reduce((current, total) => {
return current + total.price \* total.amount;
}, 0);`
