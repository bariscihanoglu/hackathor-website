import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "../CSS/Footer.css"

function Footer() {
  return (
    <div class="footer">
      <div class="content">
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /> Twitter</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faGithub} /> Github</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
          </p>
          <p>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
          </p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 class="mail">Email</h4>
          <p><a href="#">bilkentyes@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        <img src={require("../Assets/yes.png")}></img>
        <br />
        © 2023 Bilkent YES
      </footer>
    </div>
  )
}

export default Footer