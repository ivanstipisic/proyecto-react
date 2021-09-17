const productos = [
    {id: 1, title: "La piedra filosofal", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/919WJsLPqUL.jpg'},
    {id: 2, title: "La cámara secreta", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/91HHems0BVL.jpg'},
    {id: 3, title: "El prisionero de Azkaban", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/51pvV8YVxqL._SX312_BO1,204,203,200_.jpg'},
    {id: 4, title: "El cáliz de fuego", autor: 'JK Rowling', portada:'https://images.cdn2.buscalibre.com/fit-in/360x360/1f/8e/1f8e86ff8d00a174bd2f623b4d6107d4.jpg'},
    {id: 5, title: "La orden del fénix", autor: 'JK Rowling', portada:'https://librotea.elpais.com/wp-content/uploads/2019/05/23/12/08/25252e0d49c1aff3f0dce3778533f464-300x0-c-default.jpg'},
    {id: 6, title: "El misterio del príncipe", autor: 'JK Rowling', portada:'https://images.cdn3.buscalibre.com/fit-in/360x360/d9/69/d96930b2675dc05c9ef51a9720fb0cf7.jpg'},
    {id: 7, title: "Las reliquias de la muerte", autor: 'JK Rowling', portada:'https://images.cdn2.buscalibre.com/fit-in/360x360/1e/00/1e003ca055c2ca66e8dedb056ea2a688.jpg'},

]

export const getProduct = new Promise ((resolve) => {
   
        setTimeout(()=>{
            resolve(productos)
        },3000)
   
})

const producto2 = productos.filter((item) => item.id === 1)

export const getProduct2 = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(producto2)
    }, 2000);
})
