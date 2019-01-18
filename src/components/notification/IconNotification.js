import React, {Component} from 'react'

class IconNotification extends Component{
    render(){
        return(
            <div className="alert alert-info alert-with-icon" data-notify="container">
            <i className="material-icons" data-notify="icon">add_alert</i>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <i className="material-icons">close</i>
            </button>
            <span data-notify="message">This is a notification with close button and icon.</span>
          </div>
        )
    }
}

export default IconNotification