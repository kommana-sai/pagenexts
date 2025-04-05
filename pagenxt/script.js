let openshopping = document.querySelector('.openshopping');
let closeshopping = document.querySelector('.closeshopping');
let body = document.querySelector('body');
let quantity = document.querySelector('.quantity');
let list = document.querySelector('.list');
let listcard = document.querySelector('.listcard');
let total = document.querySelector('.total');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let list4 = document.querySelector('.list4');


openshopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeshopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        Image :"https://5.imimg.com/data5/ANDROID/Default/2024/5/422808797/WR/SM/LZ/143729871/product-jpeg-500x500.jpg ",
        name :'Meals',
        price : 100,
    },
     {
        id:2,
        Image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4rlFfsjv1nrPMdP7GnTSgSIkrkago7i4Yw&s ",
        name :'Fastfood & cooldrinks',
        price : 200,
    },
     {
        id:3,
        Image :"https://eventorganizers.in/wp-content/uploads/2022/08/tiffins-live-stall-in-hyderabad-for-all-parties.webp ",
        name :'Tiffin',
        price : 300,
    },
     {
        id:4,
        Image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgvPPagzS_CuxM3CAtuZhsfvD-ZJh1JBLsg&s ",
        name :'icecreams & Bakery',
        price : 400,
    },
     {
        id:5,
        Image :"https://www.royalsweets.co.uk/cdn/shop/collections/Indian-Sweets-Home-Page-Black_6e3a7dc7-7156-4924-97f0-e95d54c56393_1200x1200.jpg?v=1620141442 ",
        name :'Sweets',
        price : 500,
    },
     {
        id:6,
        Image :"https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg ",
        name :'Frouites & vegtables',
        price : 600,
    },

];

let products1 = [
    {
        id:1,
        Image :"https://img.freepik.com/free-photo/fathers-day-composition-with-jersey-shoes_23-2147790773.jpg?t=st=1743658586~exp=1743662186~hmac=0b6beaddc9d3c9a8a9d2523cc59124dc41705115e6082f65f16c3ae1db41cc1a&w=826 ",
        name :'Mens ware',
        price : 100,
    },
     {
        id:2,
        Image :"https://img.freepik.com/free-vector/women-accessories-icon-set_1284-20865.jpg?t=st=1743658660~exp=1743662260~hmac=2450c3204b1d33a4218c2c1958ff751b993750a887cc96047cbe1cb39539d743&w=826 ",
        name :'Womans ware',
        price : 200,
    },
     {
        id:3,
        Image :"https://img.freepik.com/free-photo/objects-showing-its-girl-expectancy_23-2150166756.jpg?t=st=1743658733~exp=1743662333~hmac=6a88a28f5ba634d19dca9cd924dc924e5ca61a8e8b1b7197f88231911f68654d&w=1380 ",
        name :'Child ware',
        price : 300,
    },
     {
        id:4,
        Image :"https://img.freepik.com/free-photo/golden-jewelry-store-window_1398-4127.jpg?t=st=1743658954~exp=1743662554~hmac=469a816700e8a258cdf798efd92fd8b8425b731d853cd3f9667d3e7e39f03c2a&w=1380 ",
        name :'Jewelry',
        price : 400,
    },
     {
        id:5,
        Image :"https://img.freepik.com/free-vector/fitness-sport-muscle-mass-gaining-protein-rich-food-realistic-composition-with-supplements-cheese-meat-nuts_1284-26872.jpg?uid=R138245985&ga=GA1.1.2102391497.1708933878&semt=ais_hybrid ",
        name :'Supplements',
        price : 500,
    },
     {
        id:6,
        Image :"https://img.freepik.com/free-vector/elegant-glass-bottles-womens-perfumes-with_88138-188.jpg?uid=R138245985&ga=GA1.1.2102391497.1708933878&semt=ais_hybrid ",
        name :'Perfumes',
        price : 600,
    },


   

];

let products2 = [
    {
        id:1,
        Image :"https://img.freepik.com/free-photo/chic-mid-century-modern-luxury-aesthetics-living-room-with-gray-velvet-couch-blue-rug_53876-128133.jpg?uid=R138245985&ga=GA1.1.2102391497.1708933878&semt=ais_hybrid ",
        name :'Sofa',
        price : 100,
    },
     {
        id:2,
        Image :"https://img.freepik.com/free-photo/restaurant-table-with-wooden-chairs-placed-hall-decorated-classical-style_140725-8460.jpg?uid=R138245985&ga=GA1.1.2102391497.1708933878&semt=ais_hybrid ",
        name :'Dining table',
        price : 200,
    },
     {
        id:3,
        Image :"https://img.freepik.com/free-vector/wicker-hanging-chairs-swing-hanging-chain-with-cushions_1284-45541.jpg?t=st=1743659435~exp=1743663035~hmac=bd7c76c2db813a33016a8d43a5b1f4baf1e85eb7d991912a16032531776fff32&w=826 ",
        name :'Hanging Chair',
        price : 300,
    },
     {
        id:4,
        Image :"https://img.freepik.com/free-photo/luxurious-modern-bedroom-with-comfortable-bedding-elegant-decor-generated-by-ai_188544-29870.jpg?t=st=1743659524~exp=1743663124~hmac=185acc37ec332233d2a3c9af5e09fb46a6061f51d10159abb240ac450c1edbc1&w=1380 ",
        name :'BED',
        price : 400,
    },
     {
        id:5,
        Image :"https://i.pinimg.com/736x/c0/90/c6/c090c6f3774a16bc7c3165d47eda7cf2.jpg",
        name :'Doors & Cabords',
        price : 500,
    },
     {
        id:6,
        Image :"https://st.hzcdn.com/simgs/pictures/kitchens/bartholomew-rd-martins-camisuli-architects-img~75c1c1ad0501c924_14-8969-1-42ae635.jpg ",
        name :'Kitchenitems',
        price : 600,
    },


   

];

let products3 = [
    {
        id:1,
        Image :"https://www.pedigree.in/files/styles/webp/public/2023-12/pedigree-landing-hero-dry-products.png.webp?VersionId=or14hE0XvncIiUYSHzHqHSb2NVKczEOb&itok=iTKk7B04 ",
        name :'Pet Food',
        price : 100,
    },
     {
        id:2,
        Image :"https://images.meesho.com/images/products/432669303/w89to_512.webp ",
        name :'Pet Products',
        price : 200,
    },
     {
        id:3,
        Image :"https://www.manufacturingtodayindia.com/cloud/2024/04/25/CONSUMER-ELECTRONICS.jpg ",
        name :'Electronics',
        price : 300,
    },
     {
        id:4,
        Image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMW6ul1klONcQ88pIP_DevVXGHTzgjPH0TJxaiuYqRadp3iIz9IxDWGfLyTynCx-0tR0&usqp=CAU ",
        name :'Books',
        price : 400,
    },
     {
        id:5,
        Image :"https://www.gorefurbo.com/cdn/shop/collections/Refurbished_Mobile_Phones_1.jpg?v=1695978895 ",
        name :'Mobile',
        price : 500,
    },
     {
        id:6,
        Image :"https://atyhomedecor.com/cdn/shop/products/luxury-modern-chandelier-for-living-room-staircase-large-fixture-spiral-design-hallway-crystal-light-280329_1800x1800.jpg?v=1670779056 ",
        name :'Lights',
        price : 600,
    },


   

];

let listcards = [];

function intiAPP(){
 products.forEach((value,key) => {
    let newdiv = document.createElement('newdiv');
     newdiv.classList.add('item');
    newdiv.innerHTML =` 
        <img src ="${value.Image}"/>
        <div class ="name">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onClick = "addtocart(${key})">AddToCart</button>
    `;
    list.appendChild(newdiv);
 })
 products1.forEach((value,key) => {
    let newdiv = document.createElement('newdiv');
     newdiv.classList.add('item');
    newdiv.innerHTML =` 
        <img src ="${value.Image}"/>
        <div class ="name">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onClick = "addtocart(${key})">AddToCart</button>
    `;
    list2.appendChild(newdiv);
 })

 products2.forEach((value,key) => {
    let newdiv = document.createElement('newdiv');
     newdiv.classList.add('item');
    newdiv.innerHTML =` 
        <img src ="${value.Image}"/>
        <div class ="name">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onClick = "addtocart(${key})">AddToCart</button>
    `;
    list3.appendChild(newdiv);
 })


 products3.forEach((value,key) => {
    let newdiv = document.createElement('newdiv');
     newdiv.classList.add('item');
    newdiv.innerHTML =` 
        <img src ="${value.Image}"/>
        <div class ="name">${value.name}</div>
        <div class ="price">${value.price.toLocaleString()}</div>
        <button onClick = "addtocart(${key})">AddToCart</button>
    `;
    list4.appendChild(newdiv);
 })

 

}
intiAPP();

function addtocart(key){
 if(listcards[key] == null){
   listcards[key] = products[key];
   listcards[key].quantity = 1;
 }
 reloadcard();
}

function reloadcard(){
    listcard.innerHTML ='';
    let count = 0;
    let totalprice = 0;

    listcards.forEach((value,key) =>{
    totalprice = totalprice+value.price;
    count = count+value.quantity;

    if(value!=null){
        let newdiv = document.createElement('li');
        newdiv.innerHTML = `
           <div><img src ="${value.Image}"/></div>
           <div>${value.name}</div>
           <div>${value.price.toLocaleString()}</div>
        
           <div>
           <button onClick ="changeQuantity(${key},${value.quantity -1})"> - </button>
           <div class="count">${value.quantity}</div>
           <button onClick ="changeQuantity(${key},${value.quantity +1})"> + </button>
           </div>
        `;
        listcard.appendChild(newdiv)

    }
    })
     total.innerText = totalprice.toLocaleString();
     quantity.innerText = count;
}
function changeQuantity(key,quantity){
  if(quantity == 0){
    delete listcards[key]
  }else{
    listcards[key].quantity = quantity;
    listcards[key].price = quantity*products[key].price;
  }
  reloadcard();
 }


 /* */



 /*submit */

 function submit(){
    alert('successfully recived')
 }
 


 /*
 const foodProducts = [
  { name: 'Burger', price: 100 },
  { name: 'Pizza', price: 200 },
];

const fashionProducts = [
  { name: 'T-Shirt', price: 300 },
  { name: 'Jeans', price: 800 },
];

const furnitureProducts = [
  { name: 'Chair', price: 500 },
  { name: 'Table', price: 1200 },
];

const petProducts = [
  { name: 'Dog Toy', price: 150 },
  { name: 'Cat Food', price: 250 },
];

let cart = [];

function addToCart(product) {
  const existing = cart.find(item => item.name === product.name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x ${item.qty} = ₹${item.qty * item.price}`;
    cartItems.appendChild(li);
    total += item.qty * item.price;
  });

  totalPrice.textContent = total;
}

function renderProducts(products, sectionId) {
  const section = document.getElementById(sectionId);
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button>Add to Cart</button>
    `;
    const button = card.querySelector('button');
    button.addEventListener('click', () => addToCart(product));
    section.appendChild(card);
  });
}

// Render each section
renderProducts(foodProducts, 'food-section');
renderProducts(fashionProducts, 'fashion-section');
renderProducts(furnitureProducts, 'furniture-section');
renderProducts(petProducts, 'pets-section');

*/