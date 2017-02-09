import React, { Component} from 'react';

class Followers extends Component {

    constructor(props){
        super(props);
        this.state = {
            userDataFollowers: []
        }
    }

    getDataFollowers(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.props.login+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userDataFollowers: data});
                // console.log(data);
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });   
    }

    getLocation(){
        if (this.state.userDataFollowers.location !== null) {
            return <p><span className="glyphicon glyphicon-map-marker"></span>&nbsp;{this.state.userDataFollowers.location}</p>
        } else {
            return false;
        }
    }

    componentDidMount(){
        this.getDataFollowers();
    }

    render() {
        
        const {followers} = this.props;
            return (
                <div className="media">
                  <div className="media-left">
                    <a href={followers.html_url} target="_blank">
                      <img src={followers.avatar_url} className="img-rounded followers"/>
                    </a>
                  </div>
                  <div className="media-body">
                    <p className="media-heading pside"><a href={followers.html_url} target="_blank">{this.state.userDataFollowers.name}</a></p>
                    <p className="userlogin">{followers.login}</p>
                    <p>{this.state.userDataFollowers.bio}</p>
                    {this.getLocation()}
                  </div>
                  <hr/>
                </div>
            );
    }
}

export default Followers;
