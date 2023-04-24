import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Menu from "./menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as YourSvg } from './svg.svg';
import {ReactComponent as BurgerSvg} from './burger.svg';

//import { useState } from React

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const stickyHeader = useRef()
    const logged_token = localStorage.getItem('token');
    useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader')
        let fixedTop = stickyHeader.current.offsetTop
        const fixedHeader = () => {
          if (window.pageYOffset > fixedTop) {
            mainHeader.classList.add('fixedTop')
          } else {
            mainHeader.classList.remove('fixedTop')
          }
        }
        window.addEventListener('scroll', fixedHeader)
      }, [])
    return (
        <>

            <nav id="mainHeader" ref={stickyHeader} class="navbar navbar-expand-lg bg-white1 navbar-light mainHeader">
            <div className="container">
                <a href="\" class="navbar-brand d-flex align-items-center">
                    <div className="svgLogo"><YourSvg /></div>
                </a>
                <button className="hamburger" onClick={() => {
                    setIsNavExpanded(!isNavExpanded)
                }
                }>
                    <BurgerSvg />
                </button>
                {/*<button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>*/}
                <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                    <div class=" navbar-nav ms-auto py-4 py-lg-0">
                        <ul>
                            <li><a href="#" class="nav-item nav-link active"><i class="fa fa-search"></i></a></li>
                            {/* <li><a href="/about" class="nav-item nav-link">About</a></li> */}
                            {/* <li><a href="/Career" class="nav-item nav-link">Career</a></li> */}
                               <li><a href="#" class="nav-item nav-link">Find a Program</a></li> 
                               <li><a href="/Job" class="nav-item nav-link"> Job Search</a></li>
                            <li><a href="#" class="nav-item nav-link">Community</a></li>
                        
                            <li><a href="#" class="nav-item nav-link">Resources</a></li>
                            {
                                logged_token ? (
                                    <li><a href="/dashboard" class="nav-item nav-link">Hello {localStorage.getItem('usr_name')}</a></li>
                                ) : (
                                    <>
                                    <li><a href="/Signup" class="nav-item nav-link">Signup</a></li>
                                    <li><a class="btn btn-square1 text-white me-2" href="/login">Login</a></li>
                                    </>
                                )
                            }
                            
                        </ul> 
                    </div>
                </div>
                </div>
            </nav>

        </>
    )
}

export default Header