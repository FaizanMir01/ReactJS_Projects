import './header.css'
import Ai from '../../assets/ai.png'
import people from '../../assets/people.png'
const Header = () => {
  return (
    <div className='header__container'>
      <div className="header__content">
       <div className="header-left">
       <h1>Let’s Build Something
amazing with GPT-3
OpenAI</h1>

<p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
     <div className="input-container">
      <input type="text" placeholder=' Your Email Address' />
      <button>Get Started</button>
     </div>
     <div className="people">
      <img src={people} alt="people" />
      <p>1,600 people requested access a visit in last 24 hours</p>
     </div>
       </div>
       <div className="header-right">
        <img src={Ai} alt="Ai" />
       </div>
      </div>

    </div>
  )
}

export default Header