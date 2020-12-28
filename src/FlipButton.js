import { useState } from 'react'

function FlipButton() {
    const [randNum, setRandNum] = useState('');
    const [headCount, setHeadCount] = useState(0)
    const [tailCount, setTailCount] = useState(0)
    const [coinImg, setCoinImg] = useState('')
  
    const rand = () => {
        return Math.random() * 10
      }
    
    const handleClick = () => {
         setRandNum(rand());
      if (randNum <= 5) {
             setHeadCount(headCount + 1);
          setCoinImg('heads')
      } else {
          setTailCount(tailCount + 1)
          setCoinImg('tails')
      }
   }
   

    return(
        <div>
        <button onClick={handleClick} >Flip</button>
        {coinImg === '' ? <p>Click Flip to begin.</p> : <p>Coin flip was <strong>{coinImg}</strong>. Total head count is <span className="headCount">{headCount}</span> and tails is <span className="tailCount">{tailCount}</span></p>}
        {coinImg === '' ? <span></span> : <img src={`${process.env.PUBLIC_URL}/${coinImg}.png`} alt="coin" />}
        </div>
    )
}

export default FlipButton