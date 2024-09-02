import './footer.css'
const Footer = () => {
  return (
    <div className='footer-section section__padding'>
      <div className="foot-header">
        <h1>Do you want to step in to the <br /> future before others</h1>
      </div>
      <div className="foot-btn">
        <button>Request Early Access</button>
      </div>
      <div className="footer-links-container">

        <div className="first">
          <h1>GPT3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>

        <div className="second">
          <h5>Links</h5>
          <p>About Us</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Privacy Policy</p>

        </div>
        <div className="third">
          <h5>Company</h5>
          <p>Support</p>
          <p>Forum</p>
          <p>Newsletter</p>
          <p>FAQ</p>
        </div>
        <div className="fourth">
          <h5>Follow Us</h5>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>

      </div>
      <div className="copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer