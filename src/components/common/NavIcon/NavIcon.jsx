import IconsText from '../Text/IconsText/IconsText';
import './NavIcon.css';

const NavIcon = ({icone, text, href, onClick, onMouseEnter, onMouseLeave, zindex}) => {
    return (
        <a className='Continer-NavIcon' href={href} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} zindex={zindex}>
            <img src={icone} alt="Icone" style={{ zIndex: zindex }} />
            <IconsText text={text}/>
        </a>
    );
  };
  
export default NavIcon;