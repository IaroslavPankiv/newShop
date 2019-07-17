


let navigationn = document.querySelectorAll('.navigationn ul a')
let item = document.querySelector('.item.clone');
let shopContentItemsCenter = document.querySelector('.shop_content-items.center');




let buttonSearch = document.querySelector('.heder_nav');
buttonSearch.onclick = function() {
   let headerSerch  = document.querySelector('.header_serch input');

      let a;
      let b;
      let innerName = headerSerch.value;
     
      if (innerName == "") {
         alert('Заповніть поле пошук')
      }else {
         const xhr = new XMLHttpRequest();
         xhr.open('get', "http://localhost:3000/items?searchParams=" + innerName, true);
         xhr.onload = function() {
         if (xhr.readyState === 4 && xhr.status === 200) {  
         }
          a =xhr.response
          b = JSON.parse(a);
          shopContentItemsCenter.innerHTML=` ${b.items.map(item => `
                              <div class="item clone">
                                 <div class="item_header">
                                   <div class="like"><img src="img/like.png" alt=""><span> </span></div>
                                   <div class="coment"><img src="img/coment.png" alt=""><span></span></div>
                                 </div>
                                 <div class="item_img">
                                    <img src="img/content-item1.png" alt="">
                                 </div>
                                 <div class="item_decription">
                                    <p>${item.title}</p>
                                 </div>
                                 <div class="item_price">
                                    <p>$ ${item.price}</p>
                                 </div>
                                 <div class="details item_detailis">
                                    <span class="add_to_card" onclick="addToBasket('${this}', '${item._id}', '${item.price}')">Add to Card</span>
                                 </div> 
                              </div>    `).join('\n      ')}`
   
      } 
      xhr.send();
      }
      }
      
  

// перша загрузка на сторінку першої категорії
function inner() {
   let a;
   let b;    
         
      const xhr = new XMLHttpRequest();
      xhr.open('get', "http://localhost:3000/items?category=BlackBerry", true);
      xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {  
      }
      a =xhr.response
      b = JSON.parse(a);
      
      
          shopContentItemsCenter.innerHTML=` ${b.items.map(item => `
                                 <div class="item clone">
                                    <div class="item_header">
                                      <div class="like"><img src="img/like.png" alt=""><span> </span></div>
                                      <div class="coment"><img src="img/coment.png" alt=""><span></span></div>
                                    </div>
                                    <div class="item_img">
                                       <img src="img/content-item1.png" alt="">
                                    </div>
                                    <div class="item_decription">
                                       <p>${item.title}</p>
                                    </div>
                                    <div class="item_price">
                                       <p>$ ${item.price}</p>
                                    </div>
                                    <div class="details item_detailis">
                                       <span class="add_to_card" onclick="addToBasket('${item}', '${item._id}', '${item.price}')">Add to Card</span>
                                    </div> 
                                 </div>    `).join('\n      ')}`
      
         } 
      xhr.send();
      }
      
inner();  

//виводить товар на сторікку по кліку на таби з назвами категорій телефонів
function innerName(innerName) {
   let a;
   let b;
   innerName = this.innerHTML;
   
   
   const xhr = new XMLHttpRequest();
   xhr.open('get', "http://localhost:3000/items?searchParams=" + innerName, true);
   xhr.onload = function() {
   if (xhr.readyState === 4 && xhr.status === 200) {  
   }
    a =xhr.response
    b = JSON.parse(a);
    shopContentItemsCenter.innerHTML=` ${b.items.map(item => `
                           <div class="item clone">
                              <div class="item_header">
                                <div class="like"><img src="img/like.png" alt=""><span> </span></div>
                                <div class="coment"><img src="img/coment.png" alt=""><span></span></div>
                              </div>
                              <div class="item_img">
                                 <img src="img/content-item1.png" alt="">
                              </div>
                              <div class="item_decription">
                                 <p>${item.title}</p>
                              </div>
                              <div class="item_price">
                                 <p>$ ${item.price}</p>
                              </div>
                              <div class="details item_detailis">
                                 <span class="add_to_card" onclick="addToBasket('${item}', '${item._id}', '${item.price}')">Add to Card</span>
                              </div> 
                           </div>    `).join('\n      ')}`

   } 
xhr.send();
}


// function AllItems() {
//    let a;
//    let b;
//    const xhr = new XMLHttpRequest();
//    xhr.open('get', "http://localhost:3000/items", true);
//    xhr.onload = function() {
//    if (xhr.readyState === 4 && xhr.status === 200) {  
//    }
//     a =xhr.response
//     b = JSON.parse(a);
//     console.log(b);
    
    
   


//     shopContentItemsCenter.innerHTML=` ${b.items.map(item =>
       
//     `
//                            <div class="item clone">
//                               <div class="item_header">
//                                 <div class="like"><img src="img/like.png" alt=""><span> </span></div>
//                                 <div class="coment"><img src="img/coment.png" alt=""><span></span></div>
//                               </div>
//                               <div class="item_img">
//                                  <img src="img/content-item1.png" alt="">
//                               </div>
//                               <div class="item_decription">
//                                  <p>${item.title}</p>
//                               </div>
//                               <div class="item_price">
//                                  <p>$ ${item.price}</p>
//                               </div>
//                               <div class="details item_detailis">
//                                  <span class="add_to_card" onclick="addToBasket('${item}', '${item._id}', '${item.title}')">Add to Card</span>
//                               </div> 
//                            </div>    `).join('\n      ')}`

//    }

// xhr.send();
// }





//присвоює кномкам насви категорії телефонів
const xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3000/items/categories', true);
xhr.onload = function() {
   if (xhr.readyState === 4 && xhr.status === 200) {
   }
   let a =xhr.response
   let b = JSON.parse(a);
   navigationn[0].innerHTML = b.categories[1];
   navigationn[1].innerHTML = b.categories[2];
   navigationn[2].innerHTML = b.categories[3];
   navigationn[3].innerHTML = b.categories[4];
    
   for (let i = 0; i < navigationn.length; i++) {
      navigationn[i].addEventListener('click', innerName);  
   }
   }
xhr.send();









let carddBasket = document.querySelector('.cardd_button');
carddBasket.onclick = openBasket;

//відкриває корзиун
function openBasket() {

   let basket = document.querySelector('.cards');
  
   basket.classList.toggle('carddOpen');
   basket.classList.toggle('cardd');

     if (carddBasket.innerHTML == 'Закрити корзину') {
      
      carddBasket.innerHTML = 'Відкрити корзину'
     }else if (carddBasket.innerHTML = 'Відкрити корзину') {

      carddBasket.innerHTML = 'Закрити корзину'
     }

     
     checksum();
}





let mathBasket = [];
let mathSumma = [];
function addToBasket( item, id, price) {
   // xhr.open('post', 'http://localhost:3000/items/updatebasket', true);
   // xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
   
   //    let body =  JSON.stringify({itemId: '5ca33fcc616d974a08b39410', inbasket: true})
    
   //   console.log(body);
     
   // xhr.send(body);






console.log(id);



mathBasket.push(id);
localStorage.setItem('id',  JSON.stringify(mathBasket))
mathSumma.push(price);
localStorage.setItem('summa',  JSON.stringify(mathSumma))
checksum();
}
// localStorage.clear()


let carddPrice = document.querySelector('.cardd_price span')


//функція вираховує загальну суму товарів в корзині
function checksum() {
   let getItems = JSON.parse(localStorage.getItem('summa'));                                
   if (getItems == null) {
      carddPrice.innerHTML = 'XXX'
   }else{
   let result = getItems.reduce(function(summa, current) {
      
      return parseInt(summa) + parseInt(current);
      
      
      
    }, 0);
   
   carddPrice.innerHTML = result;
}

}
checksum();


// відображає items в корзині
function itemsBasket() {
   let getItems = JSON.parse(localStorage.getItem('id'));

   

}
itemsBasket();




let button = document.querySelectorAll('.add_to_card')

// відправляю в корзину
// function toBasket() {
   
  
   



// //    const xhr = new XMLHttpRequest();
// // xhr.open('post', ' http://localhost:3000/items/updatebasket', true);
// // xhr.onload = function() {
// //    if (xhr.readyState === 4 && xhr.status === 200) {
// //    }
   
  
  
   
// //    }
// // xhr.send(body);
// }



// провірка "що в корзині"
function busket() {


} 



let shopContentPurse = document.querySelector('.shop_content-items');
// загрузка товара сумочки
function shopPurse() {
   let a;
   let b;    
         
      const xhr = new XMLHttpRequest();
      xhr.open('get', "http://localhost:3000/items?category=Purse", true);
      xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {  
      }
      a =xhr.response
      b = JSON.parse(a);

      
         shopContentPurse.innerHTML=` ${b.items.map(item => `
                                 <div class="item clone">
                                    <div class="item_header">
                                      <div class="like"><img src="img/like.png" alt=""><span> </span></div>
                                      <div class="coment"><img src="img/coment.png" alt=""><span></span></div>
                                    </div>
                                    <div class="item_img">
                                       <img src="img/content-item1.png" alt="">
                                    </div>
                                    <div class="item_decription">
                                       <p>${item.title}</p>
                                    </div>
                                    <div class="item_price">
                                       <p>$ ${item.price}</p>
                                    </div>
                                    <div class="details item_detailis">
                                       <span class="add_to_card" onclick="addToBasket('${item}', '${item._id}', '${item.price}')">Add to Card</span>
                                    </div> 
                                 </div>    `).join('\n      ')}`
      
         } 
      xhr.send();
      }
shopPurse();



// const status = function(response){
//    if (response.status !==200) {
//       return Promise.reject(new Error(response.statusText))
//    }
//    return Promise.resolve(response) 
// };
// const json = response => response.json();

// fetch('http://localhost:3000/items', {
//    method: 'post',
//    body: 'test'
// })
// // або post обо GET 
// // fetch('http://localhost:3000/items')
// .then(status)
  
// .then(json)
// .then(function(items){
//    console.log(items.items);
// })
// .catch( error => console.log('eror', error));


// fetch('http://localhost:3000/items')
// .then(response=> {
//    console.log(response);
//    response.json().then( function(data){
//       console.log(data);
      
//    })
   
// } )











// class Data {
//    constructor(year, month, day){
//       this.year = year
//       this.month = month
//       this.day = day
//    }

//    toString() {
//       return `${this.day}/${this.month}/${this.year}`
//    }
// }

// const today = new Data(2019, 7, 14)
// console.log(today.toString());


// class OtherData extends Data {
//    constructor(year, month, day){
//       super(year, month, year)
//    }
// }

// const tomorrow = new OtherData(2019, 7, 15)
// console.log('tomorrow ' , tomorrow);










console.log('IFsi-001.ITI ');
