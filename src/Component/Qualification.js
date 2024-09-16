import React from 'react'
import { Link } from 'react-router-dom'


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
                                        <p>CPI: 8.42</p>
                                        <h6><i className="fas fa-calendar-alt"></i> 2020 - 2024</h6>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Higher Secondary (XII) - SCIENCE - GSEB</h2>
                                    </div>
                                    <div className="description">
                                        <p>D. N. High School, Anand</p>
                                        <h6><i className="fas fa-calendar-alt"></i> March - 2020</h6>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Secondary (X) - GSEB</h2>
                                    </div>
                                    <div className="description">
                                        <p>D. N. High School, Anand</p>
                                        <h6><i className="fas fa-calendar-alt"></i> March - 2018</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-lg-0 mt-4">
                            <h5 className="sub-title-timeline"><i className="fas fa-briefcase"></i> Experience</h5>
                            <div className="timeline">
                                <div className="column">
                                    <div className="title">
                                        <h2>Junior Software Engineer</h2>
                                    </div>
                                    <div className="description">
                                        <p>Civica Resource Pvt. Ltd.,Vadodara</p>
                                        <h6><i className="fas fa-calendar-alt"></i> July, 2024 - Present</h6>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Graduate Trainee - Intern</h2>
                                    </div>
                                    <div className="description">
                                        <p>Civica Resource Pvt. Ltd.,Vadodara</p>
                                        <h6><i className="fas fa-calendar-alt"></i> Feb, 2024 - July, 2024</h6>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Summer Intern</h2>
                                    </div>
                                    <div className="description">
                                        <p>Code Potato Software Pvt. Ltd., Anand</p>
                                        <h6><i className="fas fa-calendar-alt"></i> May, 2023 - June, 2023</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-5" >
                        <div className="col-lg-6 mt-3">
                            <h5 className="sub-title-timeline"><i className="fas fa-graduation-cap"></i>Academic Projects</h5>
                            <div className="timeline">
                                <div className="column">
                                    <div className="title">
                                        <h2>Conveyor Website</h2>
                                    </div>
                                    <div className="description">
                                        <p>HTML, CSS, JavaScript, ReactJs</p>
                                        <p>Website Link : <Link to="https://conveyorindustries.in/" target="_blank" style={{ 'color': 'blue' }}>https://conveyorindustries.in/</Link></p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Portfolio Website</h2>
                                    </div>
                                    <div className="description">
                                        <p>HTML, CSS, JavaScript, ReactJs</p>
                                        <p>Website Link : <Link to="https://megh-portfolio.vercel.app/" target="_blank" style={{ 'color': 'blue' }}>https://megh-portfolio.vercel.app/</Link></p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Invoice Generator</h2>
                                    </div>
                                    <div className="description">
                                        <p>HTML, CSS, JavaScript, PHP, SQL Databse</p>
                                        <p>Github Reposatory Link : <Link to="https://github.com/megh2108/Invoice-Generator-Website" target="_blank" style={{ 'color': 'blue' }}>Invoice-Generator-Website</Link></p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Temple Website </h2>
                                    </div>
                                    <div className="description">
                                        <p>HTML, CSS, JavaScript, PHP, SQL Databse</p>
                                        <p>Github Reposatory Link : <Link to="https://github.com/megh2108/Temple-Website" target="_blank" style={{ 'color': 'blue' }}>Temple-Website</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mt-3">
                            <h5 className="sub-title-timeline"><i className="fas fa-graduation-cap"></i>Industrial Projects</h5>
                            <div className="timeline">
                                <div className="column">
                                    <div className="title">
                                        <h2>HealthEase - Healthcare Management System</h2>
                                    </div>
                                    <div className="description">
                                        {/* <p>technologies : MERN Techonoloy</p> */}
                                        <p>Developed "HealthEase" a  healthcare management system using MERN Stack.
                                            The platform includes features such as doctor appointment booking, medicine search, and a chatbot assistant.
                                            It offers a user dashboard for tracking medical records and an admin dashboard for managing users and doctors, ensuring secure authentication and authorization.</p>
                                        <p>Website Link : <Link to="https://medicare-frontend-seven.vercel.app/" target="_blank" style={{ 'color': 'blue' }}>https://medicare-frontend-seven.vercel.app/</Link></p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="title">
                                        <h2>Training Record System</h2>
                                    </div>
                                    <div className="description">
                                        <p>Developed Training Record System supporting roles such as Admin, Trainer, and Manager.
                                            The system enables adding trainers, assigning training topics to trainers, generating reports for admin and manager, adding program details, and nominating team members by manager.
                                            Implement system using .NET web API and Angular and managed database using MS SQL and also implement unit testing using XUnit for .NET and Jasmine Karma for Angular.</p>
                                        {/* <p>Github Reposatory Link : <Link to="https://megh-portfolio.vercel.app/" target="_blank" style={{ 'color': 'blue' }}>https://megh-portfolio.vercel.app/</Link></p> */}
                                    </div>
                                </div>
                                {/* <div className="column">
                                    <div className="title">
                                        <h2>Invoice Generator</h2>
                                    </div>
                                    <div className="description">
                                        <p>HTML, CSS, JavaScript, PHP, SQL Databse</p>
                                        <p>Github Reposatory Link : <Link to="https://github.com/megh2108/Invoice-Generator-Website" target="_blank" style={{ 'color': 'blue' }}>Invoice-Generator-Website</Link></p>
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
