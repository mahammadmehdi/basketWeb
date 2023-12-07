import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
    let { id } = useParams();
    const [detail, setDetail] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
        .then((res)=>res.json())
        .then((data)=>setDetail(data))
    }, [])
    
  return (
    <div className='page'><div className='cards'>
    <ul className='card'>
       <li className='image'><img src={detail.image} /><div className='hoverIcon'>

     <i class="fa-regular fa-eye"></i>

       <i class="fa-solid fa-basket-shopping"></i>   
       <i class="fa-regular fa-heart"></i>
           </div></li>
       <li className='name'>{detail.title}</li>
       <li className='cost'>${detail.price}.00 <span className='discount'>$35.00</span></li>
       
       
   </ul>
</div></div>
  )
}

export default Detail