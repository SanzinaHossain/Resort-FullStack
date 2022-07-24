import React from 'react'
import { AiFillTwitterCircle} from 'react-icons/ai';
import { SiFacebook } from 'react-icons/si';
import {FaInstagramSquare} from 'react-icons/fa';
import p1 from "../image/home/p1.jpg"
import p2 from "../image/home/p2.webp"
import p3 from "../image/home/p3.png"
const Navbar = () => {
  return (
    <div class="navbar bg-white navbar-fixed sticky top-0">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Rooms</a></li>
        <li><a>Restaurant</a></li>
        <li><a>About</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <img class="normal-case text-xl text-blue-900 w-24 h-16" src={p3}></img>
  </div>
  <div class="navbar-center hidden lg:flex justify-evenly">
    <ul tabindex="0" class=" menu-horizontal p-0 text-lg ">
      <li class="hover:text-blue-800 active text-lg "><a href="">Home</a></li>
      <li class="hover:text-blue-800 mx-7" ><a href="">Rooms</a></li>
      <li class="hover:text-blue-800 " ><a href="">Restaurant</a></li>
      <li class="hover:text-blue-800 mx-7"><a href="">About</a></li>
      <li class="hover:text-blue-800 "> <a href="">Blog</a></li>
      <li class="hover:text-blue-800 mx-7"><a href="">Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end lg-flex">
    <a class="hover:text-blue-500 text-2xl px-3" target="_blank" href="https://github.com/SanzinaHossain?tab=repositories"><SiFacebook></SiFacebook></a>
    <a class="hover:text-blue-500 text-3xl px-3" target="_blank" href="https://www.linkedin.com/in/sanzina-hossain-335909229/"><AiFillTwitterCircle></AiFillTwitterCircle></a>
    <a class="hover:text-blue-500 text-2xl px-3" target="_blank" href="https://codeforces.com/profile/Sanzina_67"><FaInstagramSquare></FaInstagramSquare></a>
  </div>
</div>
  )
}

export default Navbar