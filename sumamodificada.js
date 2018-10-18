const fs=require(`fs`);
fs.readFile(`./suma.js`, (error,datos) => {
if (error)
console.log(error);
else
console.log(datos.toString());
});
console.log(`ultima linea del programa`);