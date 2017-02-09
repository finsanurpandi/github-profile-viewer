import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Content from './Content.jsx';

class Profile extends Component {

    render() {
        return (
            
                  <div>
                        <div className="row">
                              <div className="col-md-3">
                                    <img src={this.props.userData.avatar_url} className="img-rounded"/>
                                    <h2>{this.props.userData.name}</h2>
                                    <p className="username">{this.props.userData.login}</p>
                                    <p>{this.props.userData.bio}</p>
                                    <hr/>
                                    <p><span className="glyphicon glyphicon-map-marker"></span>&nbsp;{this.props.userData.location}</p>
                                    <p><span className="glyphicon glyphicon-envelope"></span>&nbsp;{this.props.userData.email}</p>
                                    <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                                    <span className="label label-success">{this.props.userData.public_gists} Gists</span> <br/>
                                    <span className="label label-warning">{this.props.userData.followers} Followers</span>
                                    <span className="label label-danger">{this.props.userData.following} Following</span>
                                    <br/><br/>
                                    <a className="btn btn-primary btn-sm" target="_blank" href={this.props.userData.html_url} role="button">Visit Page</a>
                              </div>
                              <div className="col-md-9">
                                    <div className="row">
                                          <div className="col-md-12">

                                                <Content userRepos={this.props.userRepos} userData={this.props.userData} userFollowers={this.props.userFollowers} userFollowing={this.props.userFollowing} {...this.props}/>
                                          
                                          </div>
                                    </div>

                                    <br/>
                              </div>
                        </div>
                        <br/>

                        <hr/>
                        
            </div>
        );
    }
}

export default Profile;
