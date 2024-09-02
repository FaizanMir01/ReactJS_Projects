
import './blog.css';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <p className='title'>{title}</p>
        <p className='date'>{description}</p>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className='blog-container section__padding'>
      <div className="blog-heading">
        <h1>A lot is happening, <br />
        We are blogging about it.</h1>
      </div>
      <div className="blogCard-container">
        <Card image={blog01} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" description="SEP 20" />
        <Card image={blog02} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" description="OCT 30" />
        <Card image={blog03} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" description="OCT 1" />
        <Card image={blog04} title="Sep 26, 2021
GPT-3 and Open  AI is the future. Let us exlore how it is?
Read Full Article" description="AUG 01" />
        <Card image={blog05} title="Sep 26, 2021
GPT-3 and Open  AI is the future. Let us exlore how it is?
Read Full Article" description="MAR 01" />
      </div>
    </div>
  );
};

export default Blog;
