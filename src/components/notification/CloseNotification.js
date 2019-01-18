import React, {Component} from 'react'

class CloseNotification extends Component{
    render(){
        return(
            <div className="alert alert-info">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <i className="material-icons">close</i>
                </button>
                <span>This is a notification with close button.</span>
            </div>
        )
    }
}

export default CloseNotification