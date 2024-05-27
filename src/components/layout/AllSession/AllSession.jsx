import SessionTitle from "../../common/Text/SessionTitle/SessionTitle";
import './AllSession.css'
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
import LeftSession from "../SessionSolo/LeftSession";
import RightSession from "../SessionSolo/RightSession";


const AllSession = () => {
    return (
        <div className='Content Container-GiftingSession'>
            <SessionTitle text={'Gifting'} color={'#EE7500'} />
            <LeftSession title={'Toys perfect for birthday gift-giving season in Spring'} image={Image1}/>
            <RightSession title={'Gifts for Mom'} image={Image2} borderColor={'#EE7500'}/>

            <SessionTitle text={'Travel'} color={'#00963E'} />
            <LeftSession title={'Travel the world no matter where you are. No Passport needed.'} image={Image3}/>
            <RightSession title={'Fun accessories to take with you on your travels or keep kids entertained'} image={Image4} borderColor={'#00963E'}/>

            <SessionTitle text={'Adults welcome'} color={'#006CB7'} />
            <LeftSession title={'For the Kids at Heart who love to unplug, unbox and unwind'} image={Image5} borderColor={'#006CB7'} padding={'0px 0px 0px 10%'}/>

            <SessionTitle text={'Art & Home Décor '} color={'#E0E0E0'} />
            <RightSession title={'Playful ideas for refreshing your space while tapping into your more creative side'} image={Image6} borderColor={'#E0E0E0'}/>

            <SessionTitle text={'Space'} color={'#000000'} />
            <LeftSession title={'Capture the wonders of space and exploration'} image={Image7} borderColor={'#000000'} padding={'0px 0px 0px 10%'}/>

            <SessionTitle text={'Pop Culture'} color={'#FC36A5'} />
            <RightSession title={'Recreate scenes from your favorite movies and TV series'} image={Image8} borderColor={'#FC36A5'}/>

            <SessionTitle text={'Toddlers'} color={'#FFD500'} />
            <LeftSession title={'Waterproof toys for toddlers and beyond'} image={Image9} />
            <RightSession title={'xx TBD'} image={Image10} borderColor={'#FFD500'}/>

            <SessionTitle text={'Real World Role Playing'} color={'#E3000B'} />
            <LeftSession title={'Celebrating the everyday heroes'} image={Image11} />
            <RightSession title={'xxxxx TBD'} image={Image12}/>

        </div>
    );
};

export default AllSession;