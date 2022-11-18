import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Image/profile.jpg'
const Header = () => {
  return (
    <div>  
   

   <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
      <a href="index.html" class="navbar-brand d-flex align-items-center">
         <h2 class="m-0 text-primary">logo</h2>
      </a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
         <div class="navbar-nav ms-auto py-4 py-lg-0">
            <a href="#" class="nav-item nav-link active"><i class="fa fa-search"></i></a>
            <Link to="Career" class="nav-item nav-link">Career</Link>
            <Link href="#" class="nav-item nav-link">Community</Link>
            <Link href="#" class="nav-item nav-link">Jobs</Link>
            <Link href="#" class="nav-item nav-link">Resources</Link>
         </div>
         <div class="afterLogin">
            <div class="notifyIcon"><i class="fa fa-bell bellIcon"></i></div>
            <div class="profileIcon">
            <img class="iconP" src={logo} alt=""/>
           
            </div>
         </div>
      </div>
   </nav>

   <div class="seachBox">
      <form action="" method="post" class="searchForm">
         <input type="search" placeholder="Search..." />
         <button type="submit">Go</button>
      </form>
      <div class="closeSearch">+</div>
   </div>
   </div>
  )
}

export default Header