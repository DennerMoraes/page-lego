import './NavText.css';

const NavText = ({text, href}) => {
    return (
        <div>
            <a className='text-NavText' href={href}>{text}</a>
        </div>
    );
  };
  
export default NavText;