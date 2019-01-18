import React, {Component} from 'react'
import  PlainNotification from './PlainNotification'
import CloseNotification from './CloseNotification'
import IconNotification from './IconNotification'
import MultiPurposeNotification from './MultiPurposeNotification'

class Notification extends Component{
    render() {
      return (
  
        <div className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header card-header-info">
                <h4 className="card-title">Notifications</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="card-title">Notifications Style</h4>
                      <PlainNotification/>
                      <CloseNotification/>
                      <IconNotification/>
                      <MultiPurposeNotification/>
                  </div>
                  <div className="col-md-6">
                    <h4 className="card-title">Notification states</h4>
                    <div className="alert alert-info">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                      <span>
                        <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                    </div>
                    <div className="alert alert-success">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                      <span>
                        <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                    </div>
                    <div className="alert alert-warning">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                      <span>
                        <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                    </div>
                    <div className="alert alert-danger">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                      <span>
                        <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                    </div>
                    <div className="alert alert-primary">
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <i className="material-icons">close</i>
                      </button>
                      <span>
                        <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="places-buttons">
                  <div className="row">
                    <div className="col-md-6 ml-auto mr-auto text-center">
                      <h4 className="card-title">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                      <div className="row">
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-block" onclick="md.showNotification('top','left')">Top Left</button>
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-block" onclick="md.showNotification('top','center')">Top Center</button>
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-block" onclick="md.showNotification('top','right')">Top Right</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                      <div className="row">
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-block" onclick="md.showNotification('bottom','left')">Bottom Left</button>
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-block" onclick="md.showNotification('bottom','center')">Bottom Center</button>
                        </div>
                        <div className="col-md-4">
                          <button className="btn btn-primary btn-block" onclick="md.showNotification('bottom','right')">Bottom Right</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

  export default Notification 