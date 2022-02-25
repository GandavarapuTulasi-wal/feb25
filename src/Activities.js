import { useEffect, useState } from "react";
import axios from "axios";
const Activities = () => {
    let [activities, setActivity] = useState([]);
    useEffect(() => {
        axios.get("https://www.boredapi.com/api/activity").then((res) => {
            console.log(res.data);
            setActivity(res.data)
        })
    }, [])
    return(
        <div className="container">
        <div className="card-container card-one">
            <h1>Random Activities</h1>
            <div>
            <div className="activity one">Activity: {activities.activity}</div>
            <div className="activity one">Type: {activities.type}</div>
            <div className="activity one">Participants:{activities.participants}</div>
            <div className="activity one">Price: {activities.price}</div>
            <div className="activity one">Link: {activities.link}</div>
            <div className="activity one">key: {activities.key}</div>
            <div className="activity one">Accessibility: {activities.accessibility}</div>
            </div>

        </div>
        </div>
    )
}
export default Activities