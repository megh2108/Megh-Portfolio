import React from 'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import {useEffect} from 'react'



function Header() {

    useEffect( () => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
    },[])

    
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $("#site-header").addClass("nav-fixed");
        } else {
            $("#site-header").removeClass("nav-fixed");
        }
    });

    //Main navigation Active Class Add Remove
    $(".navbar-toggler").on("click", function () {
        $("header").toggleClass("active");
    });
    $(document).on("ready", function () {
        if ($(window).width() > 991) {
            $("header").removeClass("active");
        }
        $(window).on("resize", function () {
            if ($(window).width() > 991) {
                $("header").removeClass("active");
            }
        });
    });

    $(function () {
        $('.navbar-toggler').click(function () {
            $('body').toggleClass('noscroll');
        })
    });

    

  return (
    <>
      {/* <!-- header --> */}
    <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/Home">
                    <i className="fas fa-bold"></i>.
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Qualification">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                    {/* <form action="#search" method="GET" className="d-flex search-header">
                        <input className="form-control" type="search" placeholder="Enter Keyword..." aria-label="Search"
                            required/>
                        <button className="btn btn-style" type="submit">Search</button>
                    </form> */}
                </div>
                {/* <!-- toggle switch for light and dark theme --> */}
                <div className="cont-ser-position">
                    <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" for="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                {/* <!-- //toggle switch for light and dark theme --> */}
            </nav>
        </div>
    </header>
    {/* <!-- //header --> */}

    
    </>
    
  )
}

export default Header
