


let btn =document.getElementById("btn");

window.onscroll=function(){

if(scrollY>=600){
btn.style.display="block"
}
else{
    btn.style.display="none"

}
}

btn.onclick=function(){

  scrollTo({
    top:0,
    behavior:"smooth"
  }
  )

}