import React from "react"

const WorkoutTile = props => {

  return (
    <div className='workout-tile'>
      <div className='created-at-tile'>
        {props.created_at}
      </div>
      <hr/>
      <div className='workout-info'>
        {props.reps} x {props.distance} @ {props.time} with {props.rest} minutes rest
      </div>

    </div>
  )
}


export default WorkoutTile;
