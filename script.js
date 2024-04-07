let cards = document.querySelector(".cards");
let getApi = 'https://script.google.com/macros/s/AKfycbyc72F11GudEPHXTIDOazinHS6-uhn6YnBEsOK3ei_WwsgtaiQkMo6SB8pdDb1rsRM/exec';
let data

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
function category(name,cname) {
    cards.innerHTML = '';

    let categorys = document.querySelectorAll('.dish');
    for (let i = 0; i < categorys.length; i++) {
        categorys[i].classList.remove('active')
        
    }

   if(cname){
    let category = document.querySelector(`.${cname}`);
    category.classList.add('active')
   }else{
    let category = document.querySelector(`.dish1`);
    category.classList.add('active')
   }


  let newArr;

  if (name) {
    newArr = data.filter((val) => val.category == `${name ? name : ""}`);
  } else {
    newArr = data.filter((val) => val.category == "Special");
  }

  newArr.forEach(({ image, name, para, price, category }) => {
    let card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    let images = document.createElement("div");
    images.classList.add("images");
    card.appendChild(images);

    let img = document.createElement("img");
    img.src = image;
    images.appendChild(img);

    let content = document.createElement("div");
    content.classList.add("content");
    card.appendChild(content);

    let title = document.createElement("p");
    title.classList.add("title");
    title.textContent = name;
    content.appendChild(title);

    let parag = document.createElement("p");
    parag.classList.add("para");
    parag.textContent = para;
    content.appendChild(parag);

    let prc = document.createElement("div");
    prc.classList.add("prc");
    card.appendChild(prc);

    let prices = document.createElement("p");
    prices.textContent = price;
    prc.appendChild(prices);
  });
}

category("");
function getData(){
  fetch(getApi).then(response => response.json())
  .then(res => {
    console.log(res);
data = res;
category('')
  }).catch((err)=>{
    window.location.reload()
  })
}

getData()

console.log(data);