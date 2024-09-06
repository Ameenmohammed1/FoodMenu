let cards = document.querySelector(".cards");
let footerp = document.querySelector(".footerp");
let getApi = 'https://script.google.com/macros/s/AKfycbyc72F11GudEPHXTIDOazinHS6-uhn6YnBEsOK3ei_WwsgtaiQkMo6SB8pdDb1rsRM/exec';
let data

var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  
  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
 
  // Breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    
    480: {
        slidesPerView: 3,
        spaceBetween: 20
    },
    1024: {
        slidesPerView: 6,
        spaceBetween: 20
    }
}
});

data = [
  {
    image: "./images/egg-puffs.jpg",
    name: "Egg Puffs",
    para: "Egg Puffs In Air Feyer Food in kerala",
    category: "Snacks",
    price: "Load..",
  },
  {
    image: "./images/nutella-banana-puffs.jpg",
    name: "Banana Puffs",
    para: "Banana Puffs In Air Feyer Food in kerala",
    category: "Snacks",
    price: "Load..",
  },
  {
    image: "./images/maxresdefault.jpg",
    name: "Chiken Puffs",
    para: "Chiken Puffs In Air Feyer Food in kerala",
    category: "Snacks",
    price: "Load..",
  },
  {
    image: "./images/Veg-Puff-500x375.jpg",
    name: "Vegitable Puffs",
    para: "Vegitable Puffs In Air Feyer Food in kerala",
    category: "Snacks",
    price: "Load..",
  },
  {
    image: "./images/Crispy-Chicken-Burger-square-FS-4518.jpg",
    name: "Chicken Burger",
    para: "Chicken Burger Cheesi Food in kerala",
    category: "Snacks",
    price: "Load..",
  },
  {
    image: "./images/lime-juice.jpg",
    name: "Lime Juic",
    para: "Special Lime,Apple mixed Juic in kerala",
    category: "Drinks",
    price: "Load..",
  },
  {
    image: "./images/Masala-Chai-Tea-Recipe-Card.jpg",
    name: "Chai & Coffee",
    para: "A milky and spiced tea, perfect for a morning ",
    category: "Drinks",
    price: "Load..",
  },
  {
    image: "./images/Sharjah-Shake-4.jpg",
    name: "Sharjah Shake",
    para: "A sweet and creamy milkshake-like drink traditionally",
    category: "Drinks",
    price: "Load..",
  },
  {
    image: "./images/Rabri-Falooda-1300x867.jpg",
    name: "Falooda",
    para: "Traditionally it is made by mixing ice cream,milk etc.",
    category: "Drinks",
    price: "Load..",
  },
  {
    image: "./images/juices-shutterstock_121270552.jpg",
    name: "Juices",
    para: "Apple,Orange,Mango,Banana,watermelon,greap etc.",
    category: "Drinks",
    price: "Load..",
  },
  {
    image: "./images/53099699.cms.jpg",
    name: "Jilebi",
    para: " fried, crispy and sugar-coated.Best Desert in India",
    category: "Deserts",
    price: "Load..",
  },
  {
    image: "./images/niceLadoo.jpg",
    name: "Laddu",
    para: " Ladoo, also known as laddu, are soft dessert balls",
    category: "Deserts",
    price: "Load..",
  },
  {
    image: "./images/MysorePak_01.jpg",
    name: "Mysore Pak",
    para: " Melt-in-your-mouth Mysore pak is often made one of two ways",
    category: "Deserts",
    price: "Load..",
  },
  {
    image: "./images/6541218173_5a172ebe8c_z1.jpg",
    name: "Plum Cake",
    para: " Sweet and tasty plum cake air cooked in India",
    category: "Deserts",
    price: "Load..",
  },
  {
    image:
      "./images/20784-ice-cream-cake-ddmfs-step-4x3-49b3ca7af5074beeb60c02bd6f569624.jpg",
    name: "Cream Cake",
    para: " Sprecial desert butter cream cotted cake.sweety and tasty",
    category: "Deserts",
    price: "Load..",
  },
  {
    image: "./images/noodles.jpg",
    name: "Noodles",
    para: " Sprecial Maggi noodles for eat two person",
    category: "Special",
    price: "Load..",
  },
  {
    image: "./images/egg-puffs.jpg",
    name: "Cream Cake",
    para: " Sprecial desert butter cream cotted cake.sweety and tasty",
    category: "Special",
    price: "Load..",
  },
  {
    image: "./images/lime-juice.jpg",
    name: "Lime Juic",
    para: "Special Lime,Apple mixed Juic in kerala",
    category: "Special",
    price: "Load..",
  },
  {
    image: "./images/Masala-Chai-Tea-Recipe-Card.jpg",
    name: "Chai & Coffee",
    para: "A milky and spiced tea, perfect for a morning ",
    category: "Special",
    price: "Load..",
  },
  {
    image: "./images/egg-puffs.jpg",
    name: "Egg Puffs",
    para: "Egg Puffs In Air Feyer Food in kerala",
    category: "Special",
    price: "Load..",
  },
  {
    image: "./images/Crispy-Chicken-Burger-square-FS-4518.jpg",
    name: "Chicken Burger",
    para: "Chicken Burger Cheesi Food in kerala",
    category: "Special",
    price: "Load..",
  },
  {
    image: "./images/biriyani.jpg",
    name: "Chicken Biriyani",
    para: "Spicy Special Chiken Biriyani in kerala",
    category: "Special",
    price: "Load..",
  },
];


function filterData(cate,parent){
let parentDiv = document.getElementById(parent);
parentDiv.innerHTML = '';
 let newData = data.filter((val)=>val.category == cate );
console.log(newData);

 newData.map((val)=>{
  parentDiv.innerHTML +=`<div class="fcard">
                    <img src="${val.image}" alt="">
                  <div class="fcontent">
                    <p class="fname">${val.name}</p>
                    <p class="fprice">₹ ${val.price}</p>
                  </div>
                </div>`
})
}
function specialFood(cate,parent){
let parentDiv = document.getElementById("special");

 let newData = data.filter((val)=>val.category == "Special" );
console.log(newData);
parentDiv.innerHTML = '';
 newData.map((val)=>{
  parentDiv.innerHTML +=` <div class="scard swiper-slide">
                      <img class="specialImage" src="${val.image}" alt="Burger image">
                      <p class="sname">${val.name}</p>
                  <p class="sprice">₹ ${val.price}</p>
                  </div>`
})
}

// category("");
function getData(){
  fetch(getApi).then(response => response.json())
  .then(res => {
    console.log(res);
data = res;
filterData("Drinks","drinks");
filterData("Snacks","snacks");
filterData("Deserts","deserts");
specialFood()
  })
}
let menuStatus = true;
function openMenu(){
  
  if(menuStatus){

    let menu = document.querySelector('.overlaymenu');
    menu.style.display = 'block';
    menuStatus=false;
  }else{
    let menu = document.querySelector('.overlaymenu');
    menu.style.display = 'none';
    menuStatus=true;
  }
}


function closeMenu(){
    let menu = document.querySelector('.overlaymenu');
    menu.style.display = 'none';
    menuStatus=true;
}

let menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click',openMenu)

getData()
filterData("Drinks","drinks");
filterData("Snacks","snacks");
filterData("Deserts","deserts");
specialFood()


const date = new Date();
const year = date.getFullYear();
console.log(year);
footerp.innerHTML = `Food Menu All Copyringht reserved ${year} <br>Designed By - <a href="https://api.whatsapp.com/send?phone=+919846515561&text=I need Digital Food Menu List.">MirrorSoft</a>`