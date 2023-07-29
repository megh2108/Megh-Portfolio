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
                    My area of interest is Frontend Development, Backend Development & Graphics Desiging.Technology I used in Frontend Development is HTML, CSS, JavaScript, React JS , as well as in Backend Development is PHP, Node JS & MySQL, MongoDB Database.Graphics Desiging I used Canva & Adobe Illustrator.
                    My short term goal is to placed in Good company & Long term goal is grow my skills, used my knowledge in usefull things & to become good Software Developer. </p>
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
                    <Link to="https://drive.google.com/file/d/1NLTMSHIJwZJD8jIUEXnYy9RqQBi8wbKz/view?usp=sharing" target="_blank" className="btn btn-style mt-5">Download CV</Link>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //about section --> */}

    <section className="w3l-aboutblock1 pb-5" id="about">
        <div className="container py-md-5 py-4">
            <div className="row">
                <div className="col-lg-12">



                    <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                        <h5 className="title-small">About</h5>
                        <h3 className="title-style mt-3">Extra-Curricular Activities</h3>
                    </div>

                        <h5 className="mt-3">Secured 542 points out of 800 in AON CoCubes "Skill Assessment Test".</h5>
                        <h5 className="mt-3">Qualified for the round-2 of the “Azadi Ka Amrit Mahotsav Hackathon-2022” organized by the Government of Gujarat.</h5>
                        <h5 className="mt-3">Graphics Head at "CSI BVM - 2023" & Core Team Member of "CSI BVM-2022".</h5>
                        <h5 className="mt-3">Graphics Head at "GDSC BVM - 2022" & Core Team Member of "GDSC BVM-2021".</h5>
                        <h5 className="mt-3">Team Meber of UDAAN'22 Graphics Team.</h5>
                

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
