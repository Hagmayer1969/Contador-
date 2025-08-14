// estado inciAL da aplicação
let numero = 0;

// alteradores de funcionalidade 
function add() {
  numero ++;
  render();
}
function res() {
numero = 0;
  render();
}
function dim() {
  numero --;
  render();
}
//mostrar na tela e logica de cores 
function render() {
    document.querySelector("p").innerText=numero
if (numero>10) {document.querySelector("p").style.color="blue" }

else if (numero<0) { document.querySelector ("p").style.color="violet"
}
else {
    document.querySelector("p").style.color="white"
}
 }
render()

