import './ThemeMenuText.css';

const ThemeMenuText = ({text, href}) => {
    return (
            <a className='text-ThemeMenuText' href={href}>{text}</a>
    );
  };
  
export default ThemeMenuText;