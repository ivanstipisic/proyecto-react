const productos = [
    {id: 1, categoria: 'Literatura-fantastica', title: "La piedra filosofal", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/919WJsLPqUL.jpg'},
    {id: 2, categoria: 'Literatura-fantastica', title: "La cámara secreta", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/91HHems0BVL.jpg'},
    {id: 3, categoria: 'Literatura-fantastica', title: "El prisionero de Azkaban", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/51pvV8YVxqL._SX312_BO1,204,203,200_.jpg'},
    {id: 4, categoria: 'Literatura-fantastica', title: "El cáliz de fuego", autor: 'JK Rowling', portada:'https://images.cdn2.buscalibre.com/fit-in/360x360/1f/8e/1f8e86ff8d00a174bd2f623b4d6107d4.jpg'},
    {id: 5, categoria: 'Literatura-fantastica', title: "La orden del fénix", autor: 'JK Rowling', portada:'https://librotea.elpais.com/wp-content/uploads/2019/05/23/12/08/25252e0d49c1aff3f0dce3778533f464-300x0-c-default.jpg'},
    {id: 6, categoria: 'Literatura-fantastica', title: "El misterio del príncipe", autor: 'JK Rowling', portada:'https://images.cdn3.buscalibre.com/fit-in/360x360/d9/69/d96930b2675dc05c9ef51a9720fb0cf7.jpg'},
    {id: 7, categoria: 'Literatura-fantastica', title: "Las reliquias de la muerte", autor: 'JK Rowling', portada:'https://images.cdn2.buscalibre.com/fit-in/360x360/1e/00/1e003ca055c2ca66e8dedb056ea2a688.jpg'},

];

export const getProduct = new Promise ((resolve) => {
   
        setTimeout(()=>{
            resolve(productos)
        },3000)
   
}
)

const product2 = {id: 1, title: "La piedra filosofal", autor: 'JK Rowling', portada:'https://images-na.ssl-images-amazon.com/images/I/919WJsLPqUL.jpg'}

export const getProduct2 = new Promise ((resp) => {
    setTimeout(() => {
        resp(product2)
    }, 2000)
})

