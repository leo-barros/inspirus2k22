const menuList =document.getElementById("menuList");

const mB=document.getElementById("MENUBUTTON");


function togglemenu(){
 console.log(menuList.style.maxHeight)
     if(menuList.style.maxHeight =="0px")
     {
         mB.textContent="close"
          menuList.style.maxHeight ="130px";
     }
     else{
          mB.textContent="menu"
          menuList.style.maxHeight ="0px";
     }
}
function SetMaxHeight(){

if(window.innerWidth>900){
 menuList.style.maxHeight ="130px";
}else{
 menuList.style.maxHeight ="0px";
 mB.textContent="menu"
}
}


window.addEventListener('resize', SetMaxHeight);

SetMaxHeight()

togglemenu()
togglemenu()