/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

// El componente Post no tiene componentes hijos.
// ESTADO: Post debe tener un número para almacenar la cantidad de likes, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Post debe tener un método para manejar el click de su boton, el cual debe:
//  - sumar 1 like al posteo
//  - sumar en la cantidad total de likes contabilizada por App
//  - mostrar en consola qué posteo sumó un like
// PROPS: Post recibe todos los campos que muestra en pantalla: titulo, texto, likes y el método heredados para sumar en el total.
// Maqueta de Post:
//    h3
//    p
//    button       (este boton debe permitir sumar likes)
//    h5    (este h5 debe mostrar la cantidad de likes, pero si la misma es mayor a 10 debe decir "Más de 10 likes")


export default function Post({Item, onAgregarLike}) {
  const [likeValue, setLike] = React.useState(Item.likes);
  return (
    <div className='posteo'>
      <h3>{Item.titulo}</h3>
      <p>{Item.texto}</p>
      
      <button
          
          onClick={(e) => {
          e.preventDefault();
          setLike(likeValue+1);
          onAgregarLike();
        }} >
      
      <img src="https://us.123rf.com/450wm/chekman/chekman1612/chekman161200101/67594268-pulgar-arriba-icono-aislado-ilustraci%C3%B3n-vectorial-me-gusta-el-concepto-mano-amarilla-con-pulgar-arri.jpg" height="20" width auto></img>
      </button>   
      <h5>Likes: {likeValue < 10 ? likeValue : (<span>Más de 10 likes</span>)} </h5>   
    </div>
  )
}