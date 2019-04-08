import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { routerData } from '../../router/router'
import styles from './index.module.scss'

class Main extends Component {
  render() {
    return (
      <div className={styles.container}>
        {
          routerData.map((element, index) => {
            if(element.name){
              return (
                <Fragment key={index}>
                  <Link to={element.path}>{element.name}</Link>
                </Fragment>
              )
            }else{
              return null
            }
          })
        }
      </div>
    )
  }
}

export default Main