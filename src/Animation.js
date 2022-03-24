import Lottie from "lottie-react";
import robotHello from "./robotHello.json";

const Animation = () => {
    return <Lottie animationData={robotHello} loop={true}/>
};

export default Animation;