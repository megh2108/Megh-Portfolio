import React from 'react'
import {Link} from 'react-router-dom'


function About() {
  return (
    <>
      {/* <!-- about section --> */}
    <section className="w3l-aboutblock1 pt-lg-5 pt-2 pb-5" id="about">
        <div className="container py-md-5 py-4">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <div className="position-relative">
                        {/* <img src="assets/images/about.jpg" alt="" className="radius-image img-fluid"/> */}
                        <img src="assets/images/meghport.png" alt="Wat for a While" className="radius-image img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-8 ps-lg-5 mt-lg-0 mt-5">
                    <h5 className="title-small mb-1">My Intro</h5>
                    <h3 className="title-style">About Me</h3>
                    <p className="mt-3">I'm Megh Shah, Pursuing B.Tech in Computer Engineering From Birla Vishvakarma Mahavidyalay.
                     My short term goal is to complete B.Tech with 9 CPI & Long term goal is to become good Software Developer. </p>
                    <div className="my-info mt-md-5 mt-4">
                        <ul className="single-info">
                            <li className="name-style">Name</li>
                            <li>:</li>
                            <li>
                                <p>Megh Shah</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Age</li>
                            <li>:</li>
                            <li>
                                <p>21 Years</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Mobile</li>
                            <li>:</li>
                            <li>
                                <p>6352764092</p>
                            </li>
                        </ul>
                        <ul className="single-info">
                            <li className="name-style">Email</li>
                            <li>:</li>
                            <li>
                                <p><Link to="mailto:maryateer@mail.com">meghshah0410@gmail.com</Link></p>
                            </li>
                        </ul>
                    </div>
                    <Link to="#download" className="btn btn-style mt-5">Download CV</Link>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //about section --> */}
    </>
  )
}

export default About
