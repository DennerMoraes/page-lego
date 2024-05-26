import MenuIcon from "../../common/MenuIcon/MenuIcon";
import Navbar from "../../layout/NavBar/NavBar";
import Icon from "../../../assets/Icons/Home_Icon.svg"
import "./Home.css";
import ThemeMenuText from "../../common/Text/ThemeMenuText/ThemeMenuText";
import ImageButton from "../../common/ImageButton/ImageButton";
import TesteIMG from "../../../assets/BrandIcon/Architecture.svg"

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MenuIcon text={'teste'} icone={Icon}/>
            <ThemeMenuText text={'teste'}/>
            <ImageButton icone={TesteIMG}/>
        </div>
    );
  };
  
export default HomePage;