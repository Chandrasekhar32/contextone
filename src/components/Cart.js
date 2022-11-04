import React,{useContext, useEffect,useState} from 'react';
import { store } from '../App';

const Cart = () => {


  const [data,setData] = useContext(store);
  const[product,setProduct] = useState([]);
     useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/photos")
       .then((res)=>res.json())
       .then((actualData)=>setProduct(actualData))
       .catch(error=>console.log(error))
      },[])
   console.log(product)
  return (
    <div className='grid'>
      {product.map((item,index) => {
       return(<div id={index} >
         <img src={item.thumbnailUrl} alt={item.name}/></div>)
      })}
    </div>
  )
}

export default Cart