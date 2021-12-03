// TO DO
document.addEventListener("DOMContentLoaded",() =>{
  // const colseBtn = document.querySelector(".close");
  const ul = document.querySelector("ul");
  // const addinput = document.querySelector("#input");
  // const addBtn = document.querySelector(".addBtn");
 

  ul.addEventListener("click",(e) =>{
    // console.log(e.target);判斷有沒有抓到事件
   if(e.target && e.target.className === "checked"){
     e.target.classList.remove("checked");
   }
   else{
     e.target.classList.add("checked")
   }
   
  });
})


