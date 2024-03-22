import UserInfo from "../components/home/UserInfo";
import Banner from "../components/home/banner/Banner";
import Portada from "../components/home/portada/Portada";
import Precios from "../components/home/precios/Precios";
import QuienesSomos from "../components/home/quienesSomos/QuienesSomos";

const Home=()=>{
    return(
        <>
            <Portada/>
            <Precios/>
            <QuienesSomos/>
            <Banner/>
            <UserInfo/>
            <div className="w-full h-[400vh] "></div>
        </>
    )
}
export default Home;