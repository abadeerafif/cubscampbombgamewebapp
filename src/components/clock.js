import React ,{Fragment}from 'react'

const Clock = ({timeday,timehour,timemin,timesecinds}) => {
  return (
   <Fragment>
        <section className="timercontainer">
            <section className="timer">

            <div className="clock">
                <section>
                    <p>{timeday}</p>
                    <small>Days</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timehour}</p>
                    <small>Hours</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timemin}</p>
                    <small>Min</small>
                </section>
                <span>:</span>
                <section>
                    <p>{timesecinds}</p>
                    <small>secs</small>
                </section>
                


            
                </div>

            
            </section>


        </section>
    </Fragment>
  )
}
Clock.defaultProps={
    timeday:10,
    timehour:10,
    timemin:10,
    timesecinds:10,


}

export default Clock