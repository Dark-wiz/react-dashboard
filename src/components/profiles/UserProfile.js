import React, {Component} from 'react'
import ProfileCard from './ProfileCard'

class UserProfile extends Component{
    render() {
      return (
  
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header card-header-info">
                    <h4 className="card-title">Edit Profile</h4>
                    <p className="card-category">Complete your profile</p>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label className="bmd-label-floating">Company (disabled)</label>
                            <input type="text" className="form-control" disabled />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="bmd-label-floating">Username</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="bmd-label-floating">Email address</label>
                            <input type="email" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="bmd-label-floating">Fist Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="bmd-label-floating">Last Name</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="bmd-label-floating">Adress</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="bmd-label-floating">City</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="bmd-label-floating">Country</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="bmd-label-floating">Postal Code</label>
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>About Me</label>
                            <div className="form-group">
                              <label className="bmd-label-floating"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>
                              <textarea className="form-control" rows={5} defaultValue={""} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-info pull-right">Update Profile</button>
                      <div className="clearfix" />
                    </form>
                  </div>
                </div>
              </div>
              <ProfileCard/>
            </div>
          </div>
        </div>
      );
    }
  }; 

export default UserProfile