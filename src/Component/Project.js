import React from 'react'
import {Link} from 'react-router-dom'


function Project() {
  return (
    <>
       {/* <!-- home service section --> */}
    <section className="w3l-servicesblock1 py-5" id="services">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">What i do?</h5>
                <h3 className="title-style">How I can help your next project</h3>
            </div>
            <div className="w3-services-grids py-lg-4">
                <div className="fea-gd-vv row">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-gd icon-yellow">
                            <div className="icon">
                                <i className="fas fa-laptop"></i>
                            </div>
                            {/*  */}
                            <div className="icon-info">
                                <Link to="#url">Web design<br/> and development </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-blue">
                            <div className="icon">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url">Android app<br/> development</Link>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-light-green">
                            <div className="icon">
                                <i className="fab fa-react"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url">React <br/> development </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-5 mt-4">
                        <div className="feature-gd icon-red">
                            <div className="icon">
                                <i className="fab fa-php"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url">Php Web<br/> development</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-md-0 mt-4">
                        <div className="feature-gd icon-vilot">
                            <div className="icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url">Grpahics<br/> Designing</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-light-blue">
                            <div className="icon">
                                <i className="fab fa-java"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url"> Java<br/> programming</Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-dark-green">
                            <div className="icon">
                                <i className="fab fa-node"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url">Node<br/> development</Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-lg-3 col-md-6 mt-md-5 mt-4">
                        <div className="feature-gd icon-pink">
                            <div className="icon">
                                <i className="fas fa-code-branch"></i>
                            </div>
                            <div className="icon-info">
                                <Link to="#url">.net program<br/> development</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="text-center mt-5">
                <Link to="/Skills" className="btn btn-style">Learn More</Link>
            </div> */}
        </div>
    </section>
    {/* <!-- //home service section --> */}
    </>
  )
}

export default Project
