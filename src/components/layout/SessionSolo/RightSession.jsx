import './RightSession.css';
import ImageTitle from '../../common/Text/ImageTitle/ImageTitle';
import ImageDescription from '../../common/Text/ImageDescription/ImageDescription';
import DetailsButton from '../../common/DetailsButton/DetailsButton';

const RightSession = ({ title, borderColor, image, padding }) => {
    return (
        <div className="Container-Text-Img-Right" style={{borderColor: borderColor, padding: padding}}>
                <div className="Container-Image-Right">
                    <img src={image} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={title} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
        </div>
    );
};

export default RightSession;