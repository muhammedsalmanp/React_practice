import React, { useEffect, useState } from 'react'

const Timer1 = () => {
    const [time, setTime] = useState(0)
    const [timeRening, setTimeRening] = useState(false);

    useEffect(() => {
        let intervel;
        if (timeRening) {
            intervel = setInterval(() => {
                setTime(pre => pre + 1)
            }, 1000)
        } else {
            clearInterval(intervel);
        }
        return () => clearInterval(intervel);
    }, [timeRening])

    const stopeTimer = ()=>{
        setTimeRening(false)
    }

    const startTimer = ()=>{
        setTimeRening(true)
    }
    const resetTimer = ()=>{
        setTime(0);
        setTimeRening(false)
    }

    return (
        <div>
            <div>
                <h1>{time}</h1>
            </div>
            <div style={{justifyItems : "center"  }}>
                <button onClick={startTimer}>Start</button>
                <button onClick={resetTimer}>Reset</button>
                <button onClick={stopeTimer}>Stope</button>
            </div>

        </div>
    )
}

export default Timer1


