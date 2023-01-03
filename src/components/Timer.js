import {useEffect} from 'react'
import './Timer.css'

export default function Timer({ seconds, setSeconds, completed }) {

  useEffect(()=>{
   
    const interval = setInterval(() => {
        if(completed){
            clearInterval(interval)
        }else{
        setSeconds(prevSeconds => prevSeconds + 1)
    }
    },1000)

    return () => clearInterval(interval)
  })

  return (
    <div className='timer'>
        <div className='minutes'>
            {Math.floor(seconds/60) < 10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60)  }
        </div>
        <div className='seconds'>
           : {seconds%60 < 10 ? "0"+seconds%60 : seconds%60 }
        </div>
    </div>
  )
}
