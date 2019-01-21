import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeActive} from '../../store/actions/DashboardActions'


class Sidenav extends Component{
  
  handleonClick = (id) =>{
    this.props.changeActive(id)
  }

    render() {
      const {navList}= this.props
      const {active} = this.props
      const {id} = this.props
      const NavLinks = (navList.map(list =>{
        return(
            <li onClick = {() => this.handleonClick(list.id)} 
            className= {active === true & id === list.id ? "active nav-item":""}
            key = {list.id}
          >
            <Link to = {`/${list.link}`}className="nav-link">
              <p>{list.navLink}</p>
            </Link>
          </li>
        )
      }))
      return (
          <div className="sidebar" data-color="azure" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
            {/*
          Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"
  
          Tip 2: you can also add an image using data-image tag
      */}
            <div className="logo">
              <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                Creative Tim
              </a>
            </div>
            <div className="sidebar-wrapper">
              <ul className="nav">
                {NavLinks}
              </ul>
            </div>
          </div>
      );
    }
  };
  const MapStateToProps = (state) =>{
    return{
      navList: state.navList,
      active: state.active,
      id: state.id
    }
  }

  const MapDispatchToProps = (dispatch) =>{
    return{
        changeActive: (id) =>{
          dispatch(changeActive(id))
        }
    }
}

export default connect (MapStateToProps, MapDispatchToProps)(Sidenav)