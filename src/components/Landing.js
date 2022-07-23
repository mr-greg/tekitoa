import logoTitre from "../assets/img/TKT_-_TEXT.png";
import tktBackground from "../assets/img/TKT_-_Background.png";
import { Link } from "react-router-dom";
import EnLive from "./EnLive";

const Landing = () => {


    return ( 
        <div className="contenu" style={{
            backgroundImage: `url(${tktBackground})`,
            height: '100vh',
            backgroundSize: 'cover'
        }}>

            <img src={logoTitre} alt="logo titre tkt" className="tktLogo"/>
            <p className="fontMst presentationTKT">Té ki toa est une émission diffusée sur Twitch et créée par <a href="https://www.twitch.tv/maucsama" target="blank">Mauc</a>.
                <br />Chaque mercredi, Mauc interview un petit streameur afin de lui offrir de la visibilité et permettre à sa communauté de le découvrir autremment !
            </p>

            <hr className="separateur"/>

            <EnLive />
            
        </div>
    );
}
 
export default Landing;