import React, { Component} from 'react';

class Repo extends Component {

    render() {
    	const {repo} = this.props;
        var updateAt = repo.updated_at.split('-');
        var tahun = updateAt[0];
        var bulan = updateAt[1];
        var tanggal = updateAt[2].substr(0,2);

        switch(bulan){
            case '01':
                bulan = "Jan";
                break;
            case '02':
                bulan = "Feb";
                break;
            case '03':
                bulan = "Mar";
                break;
            case '04':
                bulan = 'Apr';
                break;
            case '05':
                bulan = 'May';
                break;
            case '06':
                bulan = 'Jun';
                break;
            case '07':
                bulan = 'Jun';
                break;
            case '08':
                bulan = 'Aug';
                break;
            case '09':
                bulan = 'Sep';
                break;
            case '10':
                bulan = 'Oct';
                break;
            case '11':
                bulan = 'Nov';
                break;
            case '12':
                bulan = 'Dec';
                break;
        }

        updateAt = bulan+' '+tanggal+', '+tahun;
        return (
            <div>
            		<a href={repo.html_url} target="_blank">
            			<h3>{repo.name}</h3>
            		</a>
                    <p>{repo.description}</p>
                    <br/>
                    <table>
                        <tbody>
                            <tr>
                                <td className="bulat"><div className="circle"></div></td>
                                <td>{repo.language}</td>
                                <td>Updated on {updateAt}</td>
                            </tr>
                        </tbody>
                    </table>                    
            	<hr/>
            </div>
        );
    }
}

export default Repo;
