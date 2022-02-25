const Card = props => {
    return (
        <div className="container">
        <div style={{ margin: '1em' }} class="card"><img alt="avatar" style={{ width: '250px' }}
            src={props.avatar_url} />
            <div class="text" className="activity">
                <div>
                <div style={{
                    fontWeight:
                        'bold'
                }}>Name:{props.name}</div>
                <div className="activity">Blog:{props.blog}</div>
                <div className="activity">Company:{props.company}</div>
                <div className="activity">Location:{props.location}</div>
                <div className="activity">Bio:{props.bio}</div>
                <div className="activity">Email:{props.email}</div>
                <div className="activity">Hirable:{props.hireable}</div>
                <div className="activity">Twitter_username:{props.twitter_username}</div>
                <div className="activity">Public Repos: {props.public_repos}</div>
                <div className="activity">Public Gists:{props.public_gists}</div>
                <div className="activity">followers:{props.followers}</div>
                <div className="activity">following: {props.following}</div>
                <div className="activity">Created At:{props.created_at}</div>
                <div className="activity">Updated At:{props.updated_at}</div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Card