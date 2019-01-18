import React, {Component} from 'react'

class Typography extends Component{
    render() {
      return (
  
        <div className="content">
          <div className="container-fluid">
            <div className="card">
              <div className="card-header card-header-info">
                <h4 className="card-title">Material Dashboard Heading</h4>
                <p className="card-category">Created using Roboto Font Family</p>
              </div>
              <div className="card-body">
                <div id="typography">
                  <div className="card-title">
                    <h2>Typography</h2>
                  </div>
                  <div className="row">
                    <div className="tim-typo">
                      <h1>
                        <span className="tim-note">Header 1</span>The Life of Material Dashboard </h1>
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

export default Typography