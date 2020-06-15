function mostraralerta(){
  alert("Imagen 1");
}
function mostraralerta2(){
  alert("Imagen 2");
}
function mostraralerta3(){
  alert("Imagen 3");
}
function mostraralerta4(){
  alert("Imagen 4");
}
function mostraralerta5(){
  alert("Imagen 5");
}
function hacerclick(){
  document.getElementsByTagName('img')[0].onclick=mostraralerta;
  document.getElementsByTagName('img')[1].onclick=mostraralerta2;
  document.getElementsByTagName('img')[2].onclick=mostraralerta3;
  document.getElementsByTagName('img')[3].onclick=mostraralerta4;
  document.getElementsByTagName('img')[4].onclick=mostraralerta5;
}
window.onload = hacerclick;
