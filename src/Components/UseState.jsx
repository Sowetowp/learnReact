import React, { useEffect, useState } from 'react'
import image1 from "../assets/react.svg"
import image2 from "../assets/shipping-fast-solid-svgrepo-com.svg"

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const co = 0
    const myImages = [image1, image2]
    console.log(counter2)
    const add = () => {
        if (counter2 === myImages.length - 1) {
            setCounter2(0)
        } else {
            setCounter2(counter2 + 1)
        }
    }
    const sub = () => {
        if (counter2 === 0) {
            setCounter2(myImages.length - 1)
        } else {
            setCounter2(counter2 - 1)
        }
    }
    useEffect(() => {
        const myinterval = setInterval(
            () => {
                if (counter2 === myImages.length - 1) {
                    setCounter2(0)
                } else {
                    setCounter2(counter2 + 1)
                }
            } , 2000)

            return () => clearInterval(myinterval);
    }, [myImages])
    return (
        <>
            <p style={{backgroundColor: "red"}}>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>clicks</button>
            <br />
            <img style={{ width: "100px" }} src={myImages[counter2]} alt="" />
            <br />
            <button onClick={(e) => sub()}>prev</button>
            <button onClick={() => add()}>next</button>
        </>
    )
}

export default UseState