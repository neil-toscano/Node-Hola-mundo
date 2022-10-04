const colors=require('colors');
const saludar=(nombre)=>{
return `Hola como estas ${colors.rainbow(nombre)}`;
}

console.log( saludar("neil") );