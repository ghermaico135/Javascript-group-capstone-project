"use strict";(self.webpackChunkporag_s_amazing_to_do_list=self.webpackChunkporag_s_amazing_to_do_list||[]).push([[412],{524:(n,e,r)=>{var t=r(379),i=r.n(t),A=r(795),a=r.n(A),o=r(569),s=r.n(o),c=r(565),d=r.n(c),l=r(216),p=r.n(l),m=r(589),u=r.n(m),E=r(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),i()(E.Z,f),E.Z&&E.Z.locals&&E.Z.locals;const C=(n,e)=>{n.addEventListener("click",(async()=>{await(async n=>(await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/likes",{method:"POST",body:JSON.stringify({item_id:n}),headers:{"Content-type":"application/json; charset=UTF-8"}})).status)(e);const n=await(async n=>{const e=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/likes");return(await e.json()).find((e=>e.item_id===n)).likes})(e);document.querySelector(`#s${e}`).innerText=n}))},g=r.p+"981075c9f9c1cc5bba09.png",B=r.p+"73bca44408219509d555.png",h=async n=>{const e=await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/reservations?item_id=${n}`);return await e.json()},x=(n,e)=>{e.innerHTML="",n.length&&n.forEach((n=>{const r=document.createElement("li");r.classList.add("item"),r.innerHTML=`${n.date_start}  --  ${n.date_end}  By  ${n.username} `,e.appendChild(r)}))},b=async n=>{const e=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${n}`),r=await e.json(),t=await h(r.meals[0].idMeal);((n,e)=>{let r="";r=`<div class="modal" id="item-modal">\n         <div class="Reservation-modal">\n            <div class="closeBtn">\n                <img id="closeBtn" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-close-web-flaticons-lineal-color-flat-icons-4.png" alt="delete-sign" />\n            </div>\n\n            <div class="meal-container-order">\n                <div class="img-container">\n                    <img src=${n.strMealThumb} class="item-img" alt="food-image" />\n                </div>\n\n                <h1 class="meal-title">${n.strMeal}</h1>\n\n                <div class="item-specification-container">\n                    <ul class="item-specification">\n                        <li class="item">Area:${n.strArea}</li>\n                        <li class="item">Category :${n.strCategory}</li>\n                    </ul>\n                    <ul class="item-specification">\n                        <li class="item">Ingredient:${n.strIngredient8}</li>\n                        <li class="item">Ingredient:${n.strIngredient9}</li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class="meal-container-order">\n                <h2 class="meal-reservation">Reservation History <span class="meal-reservation-span"></span></h2>\n\n                <div>\n                    <ul class="order-list-${n.idMeal}">\n                    </ul>\n                </div>\n                \n                <h3 class="add-reservation">Add a reservation</h3>\n                <form class="order-form">\n                    <input type="text" class="form-control" id="userName" placeholder="Your name" required />\n                    <input type="date" class="form-control" id="start-date" placeholder="Start date" required />\n                    <input type="date" class="form-control" id="end-date" placeholder="End date" required />\n                    <input type="submit" class="btnReserve" id="btnReserve" value="Reserve" />\n                </form>\n\n            </div>\n         </div>\n        </div>`,document.querySelector(".reservation-popup").innerHTML=r,document.querySelector(".meal-reservation-span").innerHTML=e.length||0;const t=document.querySelector(`.order-list-${n.idMeal}`);x(e,t),document.querySelector("#closeBtn").addEventListener("click",(()=>{document.querySelector(".Reservation-modal").style.display="none"}));const i=document.querySelector(".order-form");i.addEventListener("submit",(e=>{e.preventDefault();const r=document.querySelector("#userName").value,A=document.querySelector("#start-date").value,a=document.querySelector("#end-date").value;(async(n,e,r,t)=>{await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/reservations",{method:"POST",body:JSON.stringify({item_id:n,username:e,date_start:r,date_end:t}),headers:{"Content-type":"application/json; charset=UTF-8"}})})(n.idMeal,r,A,a),i.reset();let o=[];setTimeout((()=>{(async()=>{o=await h(n.idMeal)})(),setTimeout((()=>{document.querySelector(".meal-reservation-span").innerHTML=o.length||0,x(o,t)}),1e3)}),1e3)}))})(r.meals[0],t)};document.querySelector(".logo").src=g;let v=[];(async()=>{v=await(async()=>{const n=await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");return(await n.json()).meals})()})();const y=(n,e)=>{n.addEventListener("click",(n=>{n.target.classList.contains("reserve")&&b(e)}))};setTimeout((()=>{v.length?((n=>{const e=document.querySelector(".container");e.innerHTML="";for(let r=0;r<n.length;r+=1){const t=document.createElement("div");t.classList.add("flex","card"),t.innerHTML=`<h6>${n[r].idMeal}</h6>\n               <img src="${n[r].strMealThumb}" alt="food image" >\n               <div class="flex name-likes">\n                  <h1>${n[r].strMeal}</h1>\n\n                  <div class="flex likes">\n                  <img class="like-img img${r}" src="" alt="like image">\n                  <h4><span id = "s${n[r].idMeal}">0</span> likes</h4>\n                  </div>\n\n               </div>\n\n                <button class="comment">Comments</button>\n                <button class="reserve reserve${r}">Reservations</button>`,e.appendChild(t);const i=document.querySelector(`.reserve${r}`);y(i,n[r].idMeal);const A=document.querySelector(`.img${r}`);A.src=B,C(A,n[r].idMeal)}(async()=>{const n=await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Kk29kSc7pTGrSuCbL9JI/likes");(await n.json()).forEach((n=>{document.querySelector(`#s${n.item_id}`).innerText=n.likes}))})()})(v),document.querySelector("#m-item").innerText=v.length):document.querySelector(".container").textContent="Error getting data from the server! Check your internet connection & reload Please..."}),2e3)},426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(537),i=r.n(t),A=r(645),a=r.n(A),o=r(667),s=r.n(o),c=new URL(r(538),r.b),d=a()(i()),l=s()(c);d.push([n.id,`* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nbody {\n  font-family: 'Courgette', cursive, monospace, sans-serif, serif;\n  overflow-x: hidden;\n  margin: 0;\n  min-height: 100vh;\n}\n\n.max-w {\n  max-width: 1200px;\n  margin: auto;\n}\n\nheader {\n  padding: 0 10px;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n\n.logo {\n  width: 100px;\n  height: auto;\n}\n\n.nav-items {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  gap: 50px;\n}\n\n.nav-link {\n  list-style-type: none;\n}\n\n.kb-hero-b {\n  width: 100vw;\n  height: 35vh;\n  background-image: url(${l});\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.container {\n  flex-wrap: wrap;\n  align-content: center;\n  gap: 20px;\n  padding: 20px 0;\n}\n\n.card {\n  width: 350px;\n  height: 480px;\n  flex-direction: column;\n  border: 1px solid gainsboro;\n  border-radius: 15px;\n  gap: 0;\n  margin: 0 5px;\n  background-color: gainsboro;\n  transition: all 0.2s ease-in-out;\n}\n\n.card:hover {\n  border: 1px solid yellow;\n  transform: scale(1.03);\n}\n\n.card h1 {\n  text-align: left;\n  font-size: 20px;\n  height: 50px;\n  width: 65%;\n}\n\n.card h6 {\n  color: rgb(189, 184, 184);\n}\n\n.card img {\n  width: 250px;\n  border-radius: 15px;\n  margin: 5px;\n}\n\n.name-likes {\n  margin: 10px 0;\n  width: 80%;\n  justify-content: space-between;\n}\n\n.likes {\n  flex-direction: column;\n  width: 20%;\n}\n\n.card .likes img {\n  width: 30px;\n  transition: all 0.2s ease-in-out;\n}\n\n.card .likes img :hover {\n  transform: scale(1.05);\n}\n\n.card button {\n  border: 1px solid #ffeb3b;\n  border-radius: 5px;\n  height: 40px;\n  width: 90px;\n  background: #ff9800;\n  color: rgb(3, 3, 3);\n  margin: 5px 0;\n}\n\n.card button:hover {\n  border: 1px solid #020202;\n  border-radius: 5px;\n  height: 40px;\n  width: 90px;\n  background: #ffeb3bb9;\n  color: #000;\n  margin: 5px 0;\n}\n\nfooter {\n  height: 50px;\n}\n\nfooter h3 {\n  text-align: center;\n}\n\n/* Reservation */\n\n.Reservation-modal {\n  width: 80vw;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 99;\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.4);\n  text-align: center;\n  padding: 30px;\n  display: block;\n  animation-name: modalOpen;\n  animation-duration: 2s;\n  transition: transform 0.4s, top 0.4s;\n  color: #fff;\n  font-size: 24px;\n  border-radius: 3%;\n}\n\n@keyframes modalOpen {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n#closeBtn {\n  width: 84px;\n  height: 84px;\n  position: absolute;\n  z-index: 99;\n  right: 1.3rem;\n  margin-top: 1rem;\n  margin-left: 1.3rem;\n  border-radius: 4%;\n}\n\n.meal-container-order {\n  width: 70%;\n  margin: 1rem auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 3%;\n}\n\n.img-container {\n  min-width: 50%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.5rem auto;\n}\n\n.item-img {\n  width: 100%;\n  border-radius: 5%;\n}\n\n.item-specification-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 80%;\n  padding: 1rem;\n  margin: 0.5rem 0 0.5rem 0;\n}\n\n.item-specification {\n  list-style-type: none;\n  font-size: 32px;\n}\n\n.item {\n  margin-bottom: 0.5rem;\n  list-style-type: none;\n}\n\n.order-list {\n  width: 100%;\n  min-height: 40vh;\n  overflow-y: scroll;\n  margin: 0.5rem 0 0.5rem 0;\n  padding: 1rem;\n  list-style-type: none;\n}\n\n.order-form {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.form-control {\n  width: 80%;\n  margin-bottom: 1rem;\n  border-radius: 8px;\n}\n\n.form-control,\ninput[type='text'] {\n  padding: 0.5rem;\n  font-size: 24px;\n}\n\n.form-control:focus {\n  outline: none;\n}\n\n.btnReserve {\n  padding: 1rem;\n  background-color: blue;\n  color: #fff;\n  border-radius: 0.6rem;\n  border: none;\n  font-size: 32px;\n  height: 80px;\n  width: 200px;\n}\n\n@media (max-width: 768px) {\n  .Reservation-modal {\n    width: 120%;\n    transform: translate(-50%, -50%) scale(0.6);\n  }\n\n  #closeBtn {\n    width: 40px;\n    height: 44px;\n    margin-top: 1rem;\n    margin-left: 0.2rem;\n    gap: 4px;\n  }\n\n  .meal-container-order {\n    width: 85%;\n  }\n\n  .meal-title {\n    font-size: 18px;\n  }\n\n  .item-specification-container {\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    padding: 0.7rem;\n  }\n\n  .item {\n    font-size: 16px;\n  }\n\n  .meal-reservation,\n  .add-reservation {\n    font-size: 16px;\n  }\n\n  .order-form {\n    width: 80%;\n  }\n\n  .form-control,\n  input[type='text'] {\n    padding: 0.3rem;\n    font-size: 18px;\n  }\n\n  .btnReserve {\n    padding: 0.3rem;\n    height: 50px;\n    width: 100px;\n    font-size: 22px;\n  }\n}\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nbody {\r\n  font-family: 'Courgette', cursive, monospace, sans-serif, serif;\r\n  overflow-x: hidden;\r\n  margin: 0;\r\n  min-height: 100vh;\r\n}\r\n\r\n.max-w {\r\n  max-width: 1200px;\r\n  margin: auto;\r\n}\r\n\r\nheader {\r\n  padding: 0 10px;\r\n}\r\n\r\n.navbar {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.logo {\r\n  width: 100px;\r\n  height: auto;\r\n}\r\n\r\n.nav-items {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 50px;\r\n}\r\n\r\n.nav-link {\r\n  list-style-type: none;\r\n}\r\n\r\n.kb-hero-b {\r\n  width: 100vw;\r\n  height: 35vh;\r\n  background-image: url(\"../assets/kb-hero.png\");\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.container {\r\n  flex-wrap: wrap;\r\n  align-content: center;\r\n  gap: 20px;\r\n  padding: 20px 0;\r\n}\r\n\r\n.card {\r\n  width: 350px;\r\n  height: 480px;\r\n  flex-direction: column;\r\n  border: 1px solid gainsboro;\r\n  border-radius: 15px;\r\n  gap: 0;\r\n  margin: 0 5px;\r\n  background-color: gainsboro;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.card:hover {\r\n  border: 1px solid yellow;\r\n  transform: scale(1.03);\r\n}\r\n\r\n.card h1 {\r\n  text-align: left;\r\n  font-size: 20px;\r\n  height: 50px;\r\n  width: 65%;\r\n}\r\n\r\n.card h6 {\r\n  color: rgb(189, 184, 184);\r\n}\r\n\r\n.card img {\r\n  width: 250px;\r\n  border-radius: 15px;\r\n  margin: 5px;\r\n}\r\n\r\n.name-likes {\r\n  margin: 10px 0;\r\n  width: 80%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.likes {\r\n  flex-direction: column;\r\n  width: 20%;\r\n}\r\n\r\n.card .likes img {\r\n  width: 30px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.card .likes img :hover {\r\n  transform: scale(1.05);\r\n}\r\n\r\n.card button {\r\n  border: 1px solid #ffeb3b;\r\n  border-radius: 5px;\r\n  height: 40px;\r\n  width: 90px;\r\n  background: #ff9800;\r\n  color: rgb(3, 3, 3);\r\n  margin: 5px 0;\r\n}\r\n\r\n.card button:hover {\r\n  border: 1px solid #020202;\r\n  border-radius: 5px;\r\n  height: 40px;\r\n  width: 90px;\r\n  background: #ffeb3bb9;\r\n  color: #000;\r\n  margin: 5px 0;\r\n}\r\n\r\nfooter {\r\n  height: 50px;\r\n}\r\n\r\nfooter h3 {\r\n  text-align: center;\r\n}\r\n\r\n/* Reservation */\r\n\r\n.Reservation-modal {\r\n  width: 80vw;\r\n  background: rgba(0, 0, 0, 0.85);\r\n  z-index: 99;\r\n  position: fixed;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%) scale(0.4);\r\n  text-align: center;\r\n  padding: 30px;\r\n  display: block;\r\n  animation-name: modalOpen;\r\n  animation-duration: 2s;\r\n  transition: transform 0.4s, top 0.4s;\r\n  color: #fff;\r\n  font-size: 24px;\r\n  border-radius: 3%;\r\n}\r\n\r\n@keyframes modalOpen {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#closeBtn {\r\n  width: 84px;\r\n  height: 84px;\r\n  position: absolute;\r\n  z-index: 99;\r\n  right: 1.3rem;\r\n  margin-top: 1rem;\r\n  margin-left: 1.3rem;\r\n  border-radius: 4%;\r\n}\r\n\r\n.meal-container-order {\r\n  width: 70%;\r\n  margin: 1rem auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-radius: 3%;\r\n}\r\n\r\n.img-container {\r\n  min-width: 50%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0.5rem auto;\r\n}\r\n\r\n.item-img {\r\n  width: 100%;\r\n  border-radius: 5%;\r\n}\r\n\r\n.item-specification-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 80%;\r\n  padding: 1rem;\r\n  margin: 0.5rem 0 0.5rem 0;\r\n}\r\n\r\n.item-specification {\r\n  list-style-type: none;\r\n  font-size: 32px;\r\n}\r\n\r\n.item {\r\n  margin-bottom: 0.5rem;\r\n  list-style-type: none;\r\n}\r\n\r\n.order-list {\r\n  width: 100%;\r\n  min-height: 40vh;\r\n  overflow-y: scroll;\r\n  margin: 0.5rem 0 0.5rem 0;\r\n  padding: 1rem;\r\n  list-style-type: none;\r\n}\r\n\r\n.order-form {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.form-control {\r\n  width: 80%;\r\n  margin-bottom: 1rem;\r\n  border-radius: 8px;\r\n}\r\n\r\n.form-control,\r\ninput[type='text'] {\r\n  padding: 0.5rem;\r\n  font-size: 24px;\r\n}\r\n\r\n.form-control:focus {\r\n  outline: none;\r\n}\r\n\r\n.btnReserve {\r\n  padding: 1rem;\r\n  background-color: blue;\r\n  color: #fff;\r\n  border-radius: 0.6rem;\r\n  border: none;\r\n  font-size: 32px;\r\n  height: 80px;\r\n  width: 200px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .Reservation-modal {\r\n    width: 120%;\r\n    transform: translate(-50%, -50%) scale(0.6);\r\n  }\r\n\r\n  #closeBtn {\r\n    width: 40px;\r\n    height: 44px;\r\n    margin-top: 1rem;\r\n    margin-left: 0.2rem;\r\n    gap: 4px;\r\n  }\r\n\r\n  .meal-container-order {\r\n    width: 85%;\r\n  }\r\n\r\n  .meal-title {\r\n    font-size: 18px;\r\n  }\r\n\r\n  .item-specification-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    padding: 0.7rem;\r\n  }\r\n\r\n  .item {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .meal-reservation,\r\n  .add-reservation {\r\n    font-size: 16px;\r\n  }\r\n\r\n  .order-form {\r\n    width: 80%;\r\n  }\r\n\r\n  .form-control,\r\n  input[type='text'] {\r\n    padding: 0.3rem;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .btnReserve {\r\n    padding: 0.3rem;\r\n    height: 50px;\r\n    width: 100px;\r\n    font-size: 22px;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),A="/*# ".concat(i," */");return[e].concat([A]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var A={},a=[],o=0;o<n.length;o++){var s=n[o],c=t.base?s[0]+t.base:s[0],d=A[c]||0,l="".concat(c," ").concat(d);A[c]=d+1;var p=r(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var u=i(m,t);t.byIndex=o,e.splice(o,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var A=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var o=r(A[a]);e[o].references--}for(var s=t(n,i),c=0;c<A.length;c++){var d=r(A[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}A=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var A=r.sourceMap;A&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},538:(n,e,r)=>{n.exports=r.p+"ff8f4c4df5908a5465ad.png"}},n=>{n(n.s=524)}]);
//# sourceMappingURL=mymain.bundle.js.map