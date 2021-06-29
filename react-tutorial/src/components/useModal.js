import { useState } from 'react'

const useModal = () => {
   const [isShowing, setIshowing] = useState(false);

   function toggle(){
     console.log("isShowing", isShowing)
     setIshowing(!isShowing);
   }

   return {
       isShowing,
       toggle
   }
}

export default useModal;