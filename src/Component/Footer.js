import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <>
    {/* <!-- footer --> */}
    <footer className="footer-w3ls text-center py-5">
        <div className="container pt-4">
            <div className="mx-auto" style={{'max-width': '600px' }} >
                <Link to="/Home" className="footer-logo py-1">
                    {/* <i className="fas fa-bold"></i>. */}
                    Megh
                </Link>
                <p className="mt-4 text-white">Social Media Handelers 
                    </p>
                <div className="social-icons-main mt-4 pb-3">
                    <ul className="social-icons3">
                        <li>
                            <Link to="https://www.facebook.com/megh.shah.338?mibextid=ZbWKwL" target="_blank">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/Meghshah04?t=CllsgckkLRBABKkRx4ljFw&s=08" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.linkedin.com/in/megh-shah-a19813205" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/megh2108" target="_blank">
                                <i className="fab fa-github"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://instagram.com/megh___04?igshid=OTk0YzhjMDVlZA==" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- copyright --> */}
            <p className="copy-right-w3 text-white mt-5 pt-4">© 2023 Portfolio. All rights reserved | Design by
                <Link > Megh Shah.</Link>
            </p>
        </div>
    </footer>
    {/* <!-- //footer --> */}
      
    </>
  )
}

export default Footer
