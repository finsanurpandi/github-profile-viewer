import React, { Component} from 'react';
import Repo from './Repo.jsx';
import Followers from './Followers.jsx';
import Following from './Following.jsx';

class Content extends Component {

	getFollower(){
		const count = this.props.userFollowers.length;

		if (!count) {
			return <p>Too bad! nobody follows your github</p>
		} else {
			return this.props.userFollowers.map(followers => {
		            	return <Followers
		            			followers={followers}
		            			key={followers.id}
		            			login={followers.login}
		            			{...this.props} />
		            })
		}
	}

	getFollowing(){
		const count = this.props.userFollowing.length;

		if (!count) {
			return <p>Go follow someone github profile!</p>
		} else {
			return this.props.userFollowing.map(following => {
		            	return <Following
		            			following={following}
		            			key={following.id}
		            			login={following.login}
		            			{...this.props} />
		            })
		}
	}

    render() {

        return (
        	<div>
        	<ul className="nav nav-tabs" role="tablist">
				<li role="presentation" className="active"><a href="#repo" role="tab" data-toggle="tab">Repositories <span className="badge">{this.props.userData.public_repos}</span></a></li>
				<li role="presentation"><a href="#followers" role="tab" data-toggle="tab">Followers <span className="badge">{this.props.userData.followers}</span></a></li>
				<li role="presentation"><a href="#following" role="tab" data-toggle="tab">Following <span className="badge">{this.props.userData.following}</span></a></li>
			</ul>

				<div className="tab-content">
				    <div role="tabpanel" className="tab-pane active" id="repo">
				    <br/>

				    	{
		            		this.props.userRepos.map(repo => {
		            			return <Repo
		            						repo={repo}
		            						key={repo.id}
		            						{...this.props} />
		            		})
		            	}

				    </div>
				    <div role="tabpanel" className="tab-pane" id="followers">
				    <br/>
				    	{
							this.getFollower()
		            	}

				    </div>
				    <div role="tabpanel" className="tab-pane" id="following">
				    <br/>
				    	{
				    		this.getFollowing()
		            	}

				    </div>

	        	
		            	
	            </div>
            </div>
        );
    }
}

export default Content;
