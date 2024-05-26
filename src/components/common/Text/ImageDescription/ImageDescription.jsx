import './ImageDescription.css';

const ImageDescription = ({text, alinhamento}) => {
    return (
        <h2 className='Title-ImageDescription' style={{textAlign:alinhamento}}>{text}</h2>
    );
};

export default ImageDescription;