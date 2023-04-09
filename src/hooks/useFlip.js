import { useState } from "react";

//this is a custom hook

const useFlip = (staringState = true) => {
    const [flipState, setFlipState] = useState(staringState);
    const flipCard = () => setFlipState(!flipState);
    return [flipState, flipCard]
}
export default useFlip;