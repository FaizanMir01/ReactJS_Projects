import './brand.css'
import atlassian from '../../assets/atlassian.png'
import google from '../../assets/google.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'
import dropbox from '../../assets/dropbox.png'
const Brand = () => {
  return (
    <div className='brand__image-container section__padding'>
      <div className='image-container'>
        <img src={atlassian} alt="atlassian logo" />
        <img src={google} alt="google logo" />
        <img src={shopify} alt="shopify logo" />
        <img src={slack} alt="slack logo" />
        <img src={dropbox} alt="dropbox logo" />
      </div>

    </div>
  )
}

export default Brand