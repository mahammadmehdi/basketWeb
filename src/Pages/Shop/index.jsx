import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../Context/BasketContext'

function Shop() {
  const { basket, AddBasket, increase, decrease, RemoveItem } = useContext(BasketContext)

  return (
    <div className='basketpage'>
      {basket.length ? <div className='page'><div className='cards'>

        {basket
          .map((x) =>

            <ul className='card'>
              <li className='image'><img src={x.image} /><div className='hoverIcon'>

                <NavLink to={"/detail/" + x.id}> <i class="fa-regular fa-eye"></i></NavLink>

                <i class="fa-solid fa-basket-shopping" onClick={() => { AddBasket(x) }}></i>
                <i class="fa-regular fa-heart"></i>
              </div></li>
              <li className='name'>{x.title}</li>
              <li className='cost'>${x.price} <span className='discount'>$35.00</span></li>
              <div className='countButton'>
                <div className='btn' onClick={() => { increase(x) }} >+</div>
                <div className='btn' onClick={() => { decrease(x) }} >-</div>
                <div className='btn' onClick={() => { RemoveItem(x) }} >X</div></div>
              <div className="price">{x.count}</div>
            </ul>
          )}
      </div></div>
        : <h1 className='null'> Basketde mehsul yoxdur</h1>}


    </div>
  )
}

export default Shop