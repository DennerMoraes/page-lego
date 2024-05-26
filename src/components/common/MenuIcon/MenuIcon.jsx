import MenuText from '../Text/MenuText/MenuText';
import './MenuIcon.css';

const MenuIcon = ({icone, text, href}) => {
    return (
        <a className='Continer-MenuIcon' href={href}>
            <img src={icone} alt="Icone"/>
            <MenuText text={text}/>
        </a>
    );
  };
  
export default MenuIcon;