import React from 'react'
import {Link} from 'react-router-dom'


function Contact() {
  return (
    <>
      {/* <!-- contact --> */}
    <section className="w3l-contact py-5" id="contact">
        <div className="container py-lg-5 py-4">
            <div className="title-heading-w3 text-center mb-sm-5 mb-4">
                <h5 className="title-small">Get In Touch</h5>
                <h3 className="title-style">Contact Me</h3>
            </div>
            <div className="row contact-block">
                <div className="col-md-6 contact-left pe-lg-5">
                    <h3 className="mb-sm-4 mb-3">Contact Info</h3>
                    <p className="cont-para mb-sm-5 mb-4">I enjoy discussing new projects and design challenges. Please
                        share as
                        much info, as possible so
                        we can get the most out of our first catch-up.</p>
                    <div className="cont-details">
                        <p><i className="fas fa-map-marker-alt"></i>18, Aksharkunj Society, Opp. Gopi CInema    </p>
                        <p><i className="fas fa-phone-alt"></i><Link to="tel:+1(21) 234 4567">+91 6352764092</Link></p>
                        <p><i className="fas fa-envelope-open-text"></i><Link to="mailto:example@mail.com"
                                className="mail">meghshah0410@gmail.com</Link></p>
                    </div>
                    <h4 className="mb-3 mt-5">Follow Me</h4>
                    <ul className="social-icons-contact">
                        <li>
                            <Link to="https://twitter.com/Meghshah04?t=CllsgckkLRBABKkRx4ljFw&s=08" target="_blank">
                                <i className="fab fa-twitter"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/megh.shah.338?mibextid=ZbWKwL" target="_blank">
                                <i className="fab fa-facebook-f"></i>
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
                <div className="col-md-6 contact-right mt-md-0 mt-5 ps-lg-0">
                    <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                        <div className="input-grids">
                            <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*"
                                className="contact-input" required="" />
                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*"
                                className="contact-input" required="" />
                            <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*"
                                className="contact-input" required="" />
                            <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*"
                                className="contact-input" required="" />
                        </div>
                        <div className="form-input">
                            <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*"
                                required=""></textarea>
                        </div>
                        <div className="d-flex align-items-center buttons-banner mt-sm-5 mt-4">
                        <Link to="/Contact" className="btn btn-style me-2">Send Message</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- map --> */}
    <div className="map-iframe">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5031.423701087677!2d72.94661904489351!3d22.552617969894882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d399597feed%3A0x3deab4ac4e71b6c4!2sAkshar%20Kunj%20Society!5e0!3m2!1sen!2sin!4v1684224999693!5m2!1sen!2sin" 
        width="600" height="450" style={{'border':'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
            width="100%" height="400" frameborder="0" style={{'border': '0px'}} allowfullscreen=""></iframe> */}
    </div>
    {/* <!-- //contact --> */}
    </>
  )
}

export default Contact
