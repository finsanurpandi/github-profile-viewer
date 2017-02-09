import React, { Component} from 'react';

class Search extends Component {
	onSubmit(e){
		e.preventDefault();
		let username = this.refs.username.value.trim();
		if (!username) {
			alert('Please enter a username');
			return;
		}

		this.props.onFormSubmit(username);
		this.refs.username.value = '';
	}
    render() {
        return (
            <div className="row">
        	<div className="col-md-3 pull-right">
            	<form onSubmit={this.onSubmit.bind(this)}>
            		<div className="input-group input-group-sm">
            			<div className="input-group-addon"><span className='glyphicon glyphicon-search'></span></div>
            			<input type="text" placeholder="username" ref="username" className="form-control"/>
            		</div>
            	</form>
            </div>
            </div>
        );
    }
}

export default Search;
