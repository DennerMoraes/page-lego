import IconsText from '../Text/IconsText/IconsText';
import './NavIcon.css';

const NavIcon = ({icone, text, href, onClick, onMouseEnter, onMouseLeave}) => {
    return (
        <a className='Continer-NavIcon' href={href} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <img src={icone} alt="Icone"/>
            <IconsText text={text}/>
        </a>
    );
  };
  
export default NavIcon;