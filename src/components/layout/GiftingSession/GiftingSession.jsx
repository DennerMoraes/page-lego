import SessionTitle from "../../common/Text/SessionTitle/SessionTitle";
import './GiftingSession.css'
import ImageTitle from "../../common/Text/ImageTitle/ImageTitle";
import ImageDescription from "../../common/Text/ImageDescription/ImageDescription";
import DetailsButton from "../../common/DetailsButton/DetailsButton";
import Image1 from "../../../assets/Image/1.png";
import Image2 from "../../../assets/Image/2.png";
import Image3 from "../../../assets/Image/3.png";
import Image4 from "../../../assets/Image/4.png";
import Image5 from "../../../assets/Image/5.png";
import Image6 from "../../../assets/Image/6.png";
import Image7 from "../../../assets/Image/7.png";
import Image8 from "../../../assets/Image/8.png";
import Image9 from "../../../assets/Image/9.png";
import Image10 from "../../../assets/Image/10.png";
import Image11 from "../../../assets/Image/11.png";
import Image12 from "../../../assets/Image/12.png";


const GiftingSession = () => {
    return (
        <div className='Content Container-GiftingSession'>
            <SessionTitle text={'Gifting'} color={'#EE7500'} />
            <div className="Container-Text-Img">
                <div className="Container-ImageTexts">
                    <ImageTitle text={'Toys perfect for birthday gift-giving season in Spring'} />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                    <DetailsButton text={'View details'} />
                </div>
                <div className="Container-Image">
                    <img src={Image1} alt="lego" />
                </div>
            </div>

            <div className="Container-Text-Img-Right Border-Buttom-Orange">
                <div className="Container-Image-Right">
                    <img src={Image2} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={'Gifts for Mom'} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
            </div>

            <SessionTitle text={'Travel'} color={'#00963E'} />
            <div className="Container-Text-Img">
                <div className="Container-ImageTexts">
                    <ImageTitle text={'Travel the world no matter where you are. No Passport needed.'} />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                    <DetailsButton text={'View details'} />
                </div>
                <div className="Container-Image">
                    <img src={Image3} alt="lego" />
                </div>
            </div>
            <div className="Container-Text-Img-Right Border-Buttom-Green">
                <div className="Container-Image-Right">
                    <img src={Image4} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={'Fun accessories to take with you on your travels or keep kids entertained'} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
            </div>

            <SessionTitle text={'Adults welcome'} color={'#006CB7'} />
            <div className="Container-Text-Img Border-Buttom-Blue">
                <div className="Container-ImageTexts">
                    <ImageTitle text={'For the Kids at Heart who love to unplug, unbox and unwind'} />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                    <DetailsButton text={'View details'} />
                </div>
                <div className="Container-Image">
                    <img src={Image5} alt="lego" />
                </div>
            </div>

            <SessionTitle text={'Art & Home Décor '} color={'#E0E0E0'} />
            <div className="Container-Text-Img-Right Border-Buttom-Gray">
                <div className="Container-Image-Right">
                    <img src={Image6} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={'Playful ideas for refreshing your space while tapping into your more creative side'} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
            </div>

            <SessionTitle text={'Space'} color={'#000000'} />
            <div className="Container-Text-Img Border-Buttom-Black">
                <div className="Container-ImageTexts">
                    <ImageTitle text={'Capture the wonders of space and exploration'} />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                    <DetailsButton text={'View details'} />
                </div>
                <div className="Container-Image">
                    <img src={Image7} alt="lego" />
                </div>
            </div>

            <SessionTitle text={'Pop Culture'} color={'#FC36A5'} />
            <div className="Container-Text-Img-Right Border-Buttom-Pink">
                <div className="Container-Image-Right">
                    <img src={Image8} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={'Recreate scenes from your favorite movies and TV series'} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
            </div>

            <SessionTitle text={'Toddlers'} color={'#FFD500'} />
            <div className="Container-Text-Img">
                <div className="Container-ImageTexts">
                    <ImageTitle text={'Waterproof toys for toddlers and beyond'} />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                    <DetailsButton text={'View details'} />
                </div>
                <div className="Container-Image">
                    <img src={Image9} alt="lego" />
                </div>
            </div>

            <div className="Container-Text-Img-Right Border-Buttom-Yellow">
                <div className="Container-Image-Right">
                    <img src={Image10} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={'xx TBD'} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
            </div>

            <SessionTitle text={'Real World Role Playing'} color={'#E3000B'} />
            <div className="Container-Text-Img">
                <div className="Container-ImageTexts">
                    <ImageTitle text={'Celebrating the everyday heroes'} />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} />
                    <DetailsButton text={'View details'} />
                </div>
                <div className="Container-Image">
                    <img src={Image11} alt="lego" />
                </div>
            </div>

            <div className="Container-Text-Img-Right">
                <div className="Container-Image-Right">
                    <img src={Image12} alt="lego" />
                </div>
                <div className="Container-ImageTexts-Right">
                    <ImageTitle text={'xxxxx TBD'} alinhamento="end" />
                    <ImageDescription text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.'} alinhamento="end" />
                    <DetailsButton text={'View details'} />
                </div>
            </div>

        </div>
    );
};

export default GiftingSession;