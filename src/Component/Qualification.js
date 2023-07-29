import React from 'react'
import {Link} from 'react-router-dom'


function Qualification() {
  return (
    <>
      {/* <!-- qualification section --> */}
    <section className="w3l-timeline-1 py-5">
        <div className="container py-lg-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mt-5">Resume</h5>
                <h3 className="title-style mt-3">Awesome Journey</h3>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h5 className="sub-title-timeline"><i className="fas fa-graduation-cap"></i> Education</h5>
                    <div className="timeline">
                        <div className="column">
                            <div className="title">
                                <h2>B.Tech in Computer Engineering</h2>
                            </div>
                            <div className="description">
                                <p>Birla Vishvakarma Mahavidyalaya, V. V. Nagar</p>
                                <h6><i className="fas fa-calendar-alt"></i> 2020 - 2024</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Higher Secondary (XII) - SCIENCE - GSEB</h2>
                            </div>
                            <div className="description">
                                <p>D. N. High School, Anand</p>
                                <h6><i className="fas fa-calendar-alt"></i>March - 2020</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Secondary (X) - GSEB</h2>
                            </div>
                            <div className="description">
                                <p>D. N. High School, Anand</p>
                                <h6><i className="fas fa-calendar-alt"></i>March - 2018</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-lg-0 mt-4">
                    <h5 className="sub-title-timeline"><i className="fas fa-briefcase"></i> Experience</h5>
                    <div className="timeline">
                        <div className="column">
                            <div className="title">
                                <h2>Advance Web Development</h2>
                            </div>
                            <div className="description">
                                <p>Conveyor Industries, Anand</p>
                                <h6><i className="fas fa-calendar-alt"></i> 1 June, 2023 - 30 June, 2023</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Web Development & IOT</h2>
                            </div>
                            <div className="description">
                                <p>Code Potato Software Pvt. Ltd., Anand</p>
                                <h6><i className="fas fa-calendar-alt"></i> 15 May, 2023 - 31 May, 2023</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>PHP Development</h2>
                            </div>
                            <div className="description">
                                <p>Code Potato Software Pvt. Ltd., Anand</p>
                                <h6><i className="fas fa-calendar-alt"></i> 23 May, 2022 - 24 June, 2022</h6>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="row mt-5" >
                <div className="col-lg-8 mt-3">
                    <h5 className="sub-title-timeline"><i className="fas fa-graduation-cap"></i> Projects</h5>
                    <div className="timeline">
                        <div className="column">
                            <div className="title">
                                <h2>Conveyor Website</h2>
                            </div>
                            <div className="description">
                                <p>HTML, CSS, JavaScript, ReactJs</p>
                                <p>Website Link : <Link to="https://conveyorindustries.in/" target="_blank" style={{'color':'blue'}}>https://conveyorindustries.in/</Link></p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Portfolio Website</h2>
                            </div>
                            <div className="description">
                                <p>HTML, CSS, JavaScript, ReactJs</p>
                                <p>Website Link : <Link to="https://megh-portfolio.vercel.app/" target="_blank" style={{'color':'blue'}}>https://megh-portfolio.vercel.app/</Link></p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Invoice Generator</h2>
                            </div>
                            <div className="description">
                                <p>HTML, CSS, JavaScript, PHP, SQL Databse</p>
                                <p>Github Reposatory Link : <Link to="https://github.com/megh2108/Invoice-Generator-Website" target="_blank" style={{'color':'blue'}}>Invoice-Generator-Website</Link></p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Temple Website </h2>
                            </div>
                            <div className="description">
                                <p>HTML, CSS, JavaScript, PHP, SQL Databse</p>
                                <p>Github Reposatory Link : <Link to="https://github.com/megh2108/Temple-Website" target="_blank" style={{'color':'blue'}}>Temple-Website</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

             </div>   
        </div>
    </section>
    {/* <!-- //qualification section --> */}
    </>
  )
}

export default Qualification
