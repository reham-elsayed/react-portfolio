import React, { useEffect, useState } from 'react'

const useMouseOver = () => {
    //create states to save coordinates so i can use them in different components
    const[x, setX] = useState(0)
    const [y, setY] = useState(0)
//use effect to handle the event listener
    useEffect(()=>{
        // function to update the states set the css variables to the current coordinates
        const updateMousePosition = (event)=>{
            const {clientX, clientY} = event;
            setX(clientX);
            setY(clientY);
            document.documentElement.style.setProperty('--x', `${clientX}px`);
            document.documentElement.style.setProperty('--y', `${clientY}px`)
        }
        //the event listener
        document.addEventListener('pointermove', updateMousePosition);
        // cleanup remove the event listener to avoid unnecessary renders
        return ()=>{
            document.removeEventListener('pointermove', updateMousePosition);

        }
    },[])
    // the hook return the x, y values to be used in other components
  return {x,y}
}

export default useMouseOver