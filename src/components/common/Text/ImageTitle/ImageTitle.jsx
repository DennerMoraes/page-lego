import './ImageTitle.css';

const ImageTitle = ({text, alinhamento}) => {
    return (
        <h2 className='Title-ImageTitle' style={{textAlign:alinhamento}}>{text}</h2>
    );
};

export default ImageTitle;