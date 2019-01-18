import React, {Component} from 'react'
import SimpleTable from './SimpleTable'
import PlainTable from './PlainTable'

class Tables  extends Component{
    render() {
      return (
  
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <SimpleTable/>
              <PlainTable/>
            </div>
          </div>
        </div>
      );
    }
  };

export default Tables 