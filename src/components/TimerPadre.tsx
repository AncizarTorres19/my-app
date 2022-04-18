import { Timer } from './Timer'
import { useState } from 'react';

export const TimerPadre = () => {

  const [miliSeg, setMiliSeg] = useState(1000);

  return (
    <>
      <span>Milisegundos {miliSeg}</span>
      <br />

      <button
        onClick={() => setMiliSeg(1000)}
        className='btn btn-outline-success'
      >1000</button>

      <button
        onClick={() => setMiliSeg(2000)}
        className='btn btn-outline-success'
      >2000</button>

      <Timer miliSeg={miliSeg} />
    </>
  )
}
