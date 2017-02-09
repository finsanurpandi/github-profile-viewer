import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: 'YOUR_GITHUB_USERNAME',
			userData: [],
			userRepos: [],
			userFollowers: [],
			userFollowing: [],
			perPage: 30
		}
	}

	getUserData(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userData: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	getUserRepos(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userRepos: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	getUserFollowers(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/followers?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userFollowers: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	getUserFollowing(){
		$.ajax({
			url: 'https://api.github.com/users/'+this.state.username+'/following?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({userFollowing: data});
				console.log(data);
			}.bind(this),
			error: function(xhr, status, err){
				this.setState({username: null});
				alert(err);
			}.bind(this)
		});
	}

	


	handleFormSubmit(username){
		this.setState({username: username}, function(){
				this.getUserData();
	    		this.getUserRepos();
	    		this.getUserFollowers();
	    		this.getUserFollowing();
		});
	}

	componentDidMount() {
	    this.getUserData();
	    this.getUserRepos();
	    this.getUserFollowers();
	    this.getUserFollowing();
	}

    render() {
        return (
			<div>
				<Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
				<br/>
				<Profile {...this.state} {...this.props}/>
			</div>           
        );
    }
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string
};

App.defaultProps = {
	clientId: 'YOUR_GITHUB_CLIENT_ID',
	clientSecret: 'YOUR_GITHUB_CLIENT_SECRET'
}

export default App;
