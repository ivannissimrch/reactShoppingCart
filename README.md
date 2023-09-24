### The following React Project is the Shopping Cart project for the Odin Project Website.

## Project description link: https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart

## Live Site Link: https://ephemeral-narwhal-478443.netlify.app/

## The main purpuse of this project was to gain experience using the react-router library.

!['Home page'](/src/images/home.png)

!['Producst page'](/src/images/producst.png)

## Here is how I implemented the project

I have four pages on my website: Home, Products, Cart, and Product Details. The first three pages are always displayed, but the Product Details page is only shown when a specific product is selected. From there, I can add the chosen product to my cart and proceed to the Cart page.

I use three different loaders to load data on the Home, Products, and Product Details pages. Each loader function is included in the same file as the page that uses it. Initially, I used one function as a loader for all three pages, but I found it easier to read and manage with three separate loaders.

I'm using state the manage the producst in the cart i have my state and funtions to update statet in on App.js
const [productsOnCart, setProductsOnCart] = useState([]);
I calculation the TotalAmount to pay in the cart page after producst on cart as a prop from the App.js
const total = productsOnCart.reduce((current, total) => {
return current + total.price \* total.amount;
}, 0);
