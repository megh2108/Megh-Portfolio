import React from 'react'
import {Link} from 'react-router-dom'


function Skill() {
  return (
    <>
      {/* <!-- skills section --> */}
    <section className="w3l-progress py-5" id="progress">
        <div className="container py-md-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small mb-1">My Skills</h5>
                <h3 className="title-style">My Expertise Area</h3>
            </div>
            <div className="row py-lg-4">
                <div className="col-lg-6 pe-lg-5">
                    <div className="progress-info info1">
                        <h6 className="progress-tittle">Web Design <span className="">80%</span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-1" role="progressbar"
                                style={{'width': '80%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info2">
                        <h6 className="progress-tittle">HTML/CSS <span className="">95%</span>
                        </h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-2" role="progressbar"
                                style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info3">
                        <h6 className="progress-tittle">JavaScript <span className="">60%</span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-3" role="progressbar"
                                style={{'width': '60%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info4 mb-0">
                        <h6 className="progress-tittle">React JS <span className="">85%</span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-4" role="progressbar"
                                style={{'width': '85%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-5">
                    <div className="progress-info info1">
                        <h6 className="progress-tittle">Java  <span className="">80%</span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-1" role="progressbar"
                                style={{'width': '80%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info2">
                        <h6 className="progress-tittle">Bootstrap <span className="">95%</span>
                        </h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-2" role="progressbar"
                                style={{'width': '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info3">
                        <h6 className="progress-tittle">Graphic Design <span className="">60%</span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-3" role="progressbar"
                                style={{'width': '60%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className="progress-info info4 mb-0">
                        <h6 className="progress-tittle">UI/UX Design <span className="">85%</span></h6>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped gradient-4" role="progressbar"
                                style={{'width': '85%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- //skills section --> */}
    </>
  )
}

export default Skill
