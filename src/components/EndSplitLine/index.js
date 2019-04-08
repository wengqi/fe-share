import React, { Component } from 'react'
import styles from './index.module.scss'

class EndSplitLine extends Component {
  static defaultProps = {
    count: 40,
    deepColor: '#ECEDED',
    lightColor: '#F1F2F2'
  }
  render() {
    const {count, deepColor, lightColor} = this.props

    return (
      <div className={styles.container}>
        <div className={styles.itemWrapper}>
        {
          Array(count).fill(1).map((item, index) => {
            return (
              <div key={index} className={styles.item} style={{background: `radial-gradient(circle, ${lightColor}, ${deepColor}`}}></div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default EndSplitLine