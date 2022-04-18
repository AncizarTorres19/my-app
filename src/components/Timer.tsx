import { useEffect, useRef, useState } from 'react'

type TimerArgs = {
    miliSeg: number
    segundos?: number
}
export const Timer = ({ miliSeg }: TimerArgs) => {

    const [seg, setSeg] = useState(0);
    const ref = useRef<NodeJS.Timer>()

    console.log(miliSeg);

    useEffect(() => {
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(() => setSeg(seg + 1), miliSeg);
    }, [miliSeg])

    return (
        <>
            <h4>Timer: <small>{seg}</small></h4>
        </>
    )
}
