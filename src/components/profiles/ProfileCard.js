import React, {Component} from 'react'
import Image from '../../assets/img/faces/marc.jpg'
import {Link} from 'react-router-dom'

class ProfileCard extends Component{
    render(){
        return(
            <div className="col-md-4">
                <div className="card card-profile">
                <div className="card-avatar">
                    <img className="img" alt = ' profile' src= {Image} />
                </div>
                <div className="card-body">
                    <h6 className="card-category">CEO / Co-Founder</h6>
                    <h4 className="card-title">Alec Thompson</h4>
                    <p className="card-description">
                    Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                    </p>
                    < Link to = "" className="btn btn-info btn-round">Follow</Link>
                </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard