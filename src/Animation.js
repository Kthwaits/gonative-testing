import Lottie from "react-lottie";
import robotHello from "./robotHello.json";

function Animation() {
    const defaultOptions = {
       loop: true,
       autoplay: true,
       animationData: robotHello,
       rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
       },
    };
 
    return (
       <div>
          <Lottie options={defaultOptions} />
       </div>
    );
 }

export default Animation;