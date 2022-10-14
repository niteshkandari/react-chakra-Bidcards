import React,{ useState, useEffect } from 'react'

type BiddingClockPropsType = {
    startTime:string
}
const BiddingClock = (props:BiddingClockPropsType) => {
  const { startTime } = props;  
  const [timerDay, setTimerDay] = useState<number>(10);  
  const [timerHours, setTimerHours] = useState<number>(10);  
  const [timerMinutes, setTimerMinutes] = useState<number>(10);  
  const [timerSeconds, setTimerSeconds] = useState<number>(10);  
  let interval:any;
    const startTimer = () => {
        const countDownDate = new Date(startTime).getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance/(24*60*60*1000));
            const hours = Math.floor(distance%(24*60*60*1000) / (1000 * 60 * 60));
            const minutes = Math.floor(distance%(60*60*1000) / (1000 * 60));
            const seconds = Math.floor(distance%(60*1000) / (1000));
            if(distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDay(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }  
    useEffect(() => {
        startTimer()
    });
  return <>{`${timerDay} : ${timerHours} : ${timerMinutes} : ${timerSeconds}`}</>
}

export default BiddingClock;