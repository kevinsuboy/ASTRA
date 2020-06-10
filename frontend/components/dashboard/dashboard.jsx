import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutItem from '../workouts/workout_item'

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            bool: false
        }
    }

    componentDidMount() {
        this.props.fetchUsersWorkouts(this.props.currentUser.id).then(
            () => this.setState({bool: true})
        )
    }

    render() {
        // debugger
        if(!this.state.bool) return null;
        const workouts = this.props.workouts;
        const workoutsCU = workouts.filter(workout => workout.user_id === this.props.currentUser.id)
        const latestWorkout = workouts[workouts.length - 1]
        // debugger
        return(
            <div>
                This is dashboard
                <div>
                    <img src={window.ava} className='dash-pic-small'/>
                    <div>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</div>
                    <label>
                        <div>{workoutsCU.length}</div>
                        Activities
                    </label>
                    <label>
                        Latest Activity
                        <div> 
                            <div>
                                {latestWorkout.title}
                            </div>
                            <div>
                                {latestWorkout.date}
                            </div>
                        </div>
            
                    </label>
                </div>

                <ul >
                {
                workouts.map(workout => (
                    <WorkoutItem
                    key={`workout${workout.id}`}
                    workout={workout}
                    currentUser={this.props.currentUser}
                />
                    )
                )
                }
          </ul>
            </div>
        )
    }
}

export default Dashboard;