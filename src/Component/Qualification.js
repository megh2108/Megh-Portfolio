import React from 'react'
import {Link} from 'react-router-dom'


function Qualification() {
  return (
    <>
      {/* <!-- qualification section --> */}
    <section className="w3l-timeline-1 py-5">
        <div className="container py-lg-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small">Resume</h5>
                <h3 className="title-style">Awesome Journey</h3>
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
                                <p>Birla Vishvakarma Mahabidyalays</p>
                                <h6><i className="fas fa-calendar-alt"></i> 2020 - 2024</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>HSC Standard</h2>
                            </div>
                            <div className="description">
                                <p>D.N. High School</p>
                                <h6><i className="fas fa-calendar-alt"></i> 2020</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>SSC Standard</h2>
                            </div>
                            <div className="description">
                                <p>D.N. High School</p>
                                <h6><i className="fas fa-calendar-alt"></i> 2018</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mt-lg-0 mt-4">
                    <h5 className="sub-title-timeline"><i className="fas fa-briefcase"></i> Experience</h5>
                    <div className="timeline">
                        <div className="column">
                            <div className="title">
                                <h2>Summer Intern - 2023</h2>
                            </div>
                            <div className="description">
                                <p>Code Potato Software Pvt. Ltd.</p>
                                <h6><i className="fas fa-calendar-alt"></i> May 2023 - Current</h6>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                <h2>Summer Intern - 2022</h2>
                            </div>
                            <div className="description">
                                <p>Code Potato Software Pvt. Ltd.</p>
                                <h6><i className="fas fa-calendar-alt"></i> May 2022 - June 2022</h6>
                            </div>
                        </div>
                        {/* <div className="column">
                            <div className="title">
                                <h2>HTML Developer</h2>
                            </div>
                            <div className="description">
                                <p>Agile info</p>
                                <h6><i className="fas fa-calendar-alt"></i> 2017 - 2018</h6>
                            </div>
                        </div> */}
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
