import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isrenig, setIsrenig] = useState(true)

    useEffect(() => {
        let timer;
        if (isrenig) {
            timer = setInterval(() => {
                setTime(pre => pre + 1);
            }, 1000)
        }

        return () => clearInterval(timer);
    }, [isrenig]);
    const start = () => {
        setIsrenig(true)
    }
    const stope = () => {
        setIsrenig(false)
    }
    const reset = () => {
        setTime(0)
        setIsrenig(false)
    }
    return (
        <div>
            <h1>Time:{time}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ marginRight: '10px' }} onClick={stope}>Stop</button>
                <button style={{ marginRight: '10px' }} onClick={start}>Start</button>
                <button style={{ marginRight: '10px' }} onClick={reset}>Reset</button>
            </div>


        </div>
    )
}

export default Timer
