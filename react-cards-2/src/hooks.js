import { useState } from "react";
function useFlip() {
    const [state, setState] = useState(true)
    const flipCard = () => {
      setState(state => !state)
    };

    return [state, flipCard]
}

export default useFlip 