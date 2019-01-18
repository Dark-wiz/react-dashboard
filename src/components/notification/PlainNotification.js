import React,{Component} from 'react'

class PlainNotification extends Component{
    render(){
        return(
            <div className="alert alert-info">
                <span>This is a plain notification</span>
          </div>
        )
    }
}

export default  PlainNotification