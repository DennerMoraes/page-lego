import './ImageButton.css';

const ImageButton = ({icone, href}) => {
    return (
        <div className='Continer-ImageButton'>
            <a href={href}>
                <img src={icone} alt="Icone"/>
            </a>
        </div>
    );
  };
  
export default ImageButton;