import React from 'react'
import { Link } from 'react-router-dom'


function Banner() {
    return (
        <>
            {/* <!-- banner section --> */}
            <section className="w3l-banner py-5" id="home">
                <div className="container py-md-5 py-4">
                    <div className="row align-items-center pt-4">
                        <div className="col-md-6 banner-left pe-xl-5">
                            <h4>Hi, I'm Megh Shah</h4>
                            <h3 className="mb-3 mt-1">Developer</h3>
                            <p className="banner-sub me-md-5">Enthusiastic Software Engineer with hands-on experience in creating web applications and mobile applications. Experienced in using Azure DevOps for efficient development workflows and skilled in ensuring software quality through effective testing practices.

                            </p>
                            <div className="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                                <Link to="/About" className="btn btn-style me-2">About Me</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
                {/* <!-- animations icons --> */}
                <div className="icon-effects-w3-1 text-right">
                    <img src="assets/images/icon2.png" alt="" className="img-fluid" />
                </div>
                {/* <div className="icon-effects-w3-2 text-right">
                    <img src="assets/images/icon3.png" alt="" className="img-fluid" />
                </div> */}
                {/* <div className="icon-effects-w3-3 text-right">
                    <img src="assets/images/icon1.png" alt="" className="img-fluid" />
                </div> */}
                <div className="icon-effects-w3-4 text-right">
                    <img src="assets/images/icon6.png" alt="" className="img-fluid" />
                </div>
                {/* <!-- //animations icons --> */}
            </section>
            {/* <!-- //banner section --> */}

        </>
    )
}

export default Banner
