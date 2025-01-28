import React, {useState, useEffect} from 'react';

function Timer() {
   const [timer, setTimer] = useState({
        hour: 0,
        min : 0,
        sec : 0
    });

    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        let intervalId;
        if(isActive){
            intervalId = setInterval(()=>{
                setTimer((prev)=>{
                    let sec = prev.sec;
                    let min = prev.min;
                    let hour = prev.hour;

                    sec++;
                    if(sec === 60){
                        sec = 0;
                        min++;
                    }
                    if(min === 60){
                        min = 0;
                        hour++;
                    }

                    return {
                        hour,
                        min,
                        sec
                    }
                })
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        }
    } , [isActive]);

    const resetTheTimer = ()=>{
        setTimer({
            hour: 0,
            min : 0,
            sec : 0
        });
        setIsActive(false);
    }

  return (
    <div>
      <h1>Timer</h1>
      {timer.hour} : {timer.min} : {timer.sec}
          <div>
              <button onClick={() => setIsActive(!isActive)}>{isActive ? 'Pause' : 'Start'}</button>
              <button onClick={() => resetTheTimer()}>Reset</button>
          </div>
    </div>
  );
}

export default Timer;