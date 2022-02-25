import axios from 'axios'
import { useState } from 'react'
const Form = props => {
    const [username, setUsername] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data)
            setUsername('')
        })
    }
    return (
        <div className="card-container">
            <h1>Github</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username} 
                className="todo-user-input"
                onChange={event =>
                    setUsername(event.target.value)} placeholder="GitHub username"
                required
            /><br />
            <div className="box">
            <button type="submit" className="button">Add card</button>
            </div>
        </form>
        </div>
    )
}
export default Form