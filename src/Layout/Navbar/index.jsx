import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"
import { BasketContext } from '../../Context/BasketContext'

function Navbar() {
  const { basket } = useContext(BasketContext)
  return (
    <div className='navigation'>

      <div className='navbarImage'>
        <img src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp" alt="" />
      </div>
      <div className='navbarPages'>
        <NavLink to={"/"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li>HOME</li></NavLink>
        <NavLink to={"/basket"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li className='basket'>BASKET <sup>{basket.length ? basket.length : ""}</sup></li></NavLink>
        <NavLink to={"/blog"} style={({ isActive }) => {
          return {

            color: isActive ? "green" : "black",

          };
        }}><li>BLOG</li></NavLink>
        <NavLink to={"/pages"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li>PAGES</li></NavLink>
        <NavLink to={"/contact"} style={({ isActive }) => {
          return {

            color: isActive ? "#71CD13" : "black",

          };
        }}><li>CONTACT</li></NavLink>



      </div>
      <div className='navbarIcon'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-basket-shopping"></i>
        <i class="fa-regular fa-user"></i>
        <i class="fa-regular fa-heart"></i>
      </div>
    </div>
  )
}

export default Navbar