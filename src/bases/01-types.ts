
export let name: string = 'Daniel';
export const age: number = 22;
export const isValid: boolean = true;

name = 'Richerson';

export const templateString: string = `Esto es un string 
multilinea
que puede tener 
" dobles
'simple 
inyectar valores ${ name }
expresiones ${ 1 + 1 }
números ${ age }
booleanos ${ isValid }`;

console.log( templateString );