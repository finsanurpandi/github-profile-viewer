import React, { Component} from 'react';

class Following extends Component {

    constructor(props){
        super(props);
        this.state = {
            userDataFollowing: []
        }
    }

    getDataFollowing(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.props.login+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userDataFollowing: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({username: null});
                alert(err);
            }.bind(this)
        });   
    }

    getLocation(){
        if (this.state.userDataFollowing.location !== null) {
            return <p><span className="glyphicon glyphicon-map-marker"></span>&nbsp;{this.state.userDataFollowing.location}</p>
        } else {
            return false;
        }
    }

    componentDidMount(){
        this.getDataFollowing();
    }

    render() {
        const {following} = this.props;
        
        return (

            <div className="media">
              <div className="media-left">
                <a href={following.html_url} target="_blank">
                  <img src={following.avatar_url} className="img-rounded followers"/>
                </a>
              </div>
              <div className="media-body">
                <p className="media-heading pside"><a href={following.html_url} target="_blank">{this.state.userDataFollowing.name}</a></p>
                <p className="userlogin">{following.login}</p>
                <p>{this.state.userDataFollowing.bio}</p>
                {this.getLocation()}
              </div>
              <hr/>
            </div>
        );
    }
}

export default Following;
