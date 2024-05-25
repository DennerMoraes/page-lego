import './IconsText.css';

const IconsText = ({text, href}) => {
    return (
        <div>
            <p className='text-IconsText' href={href}>{text}</p>
        </div>
    );
  };
  
export default IconsText;