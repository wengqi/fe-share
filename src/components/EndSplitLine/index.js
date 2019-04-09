import React, { Component } from 'react'
import styles from './index.module.scss'

class EndSplitLine extends Component {
  static defaultProps = {
    count: 31,
    deepColor: '#ECEDED',
    lightColor: '#EFF0F0'
  }
  render() {
    const {count, deepColor, lightColor} = this.props

    return (
      <div className={styles.itemWrapper}>
        {
          Array(count).fill(1).map((item, index) => {
            return (
              <div key={index} className={styles.item} style={{background: `radial-gradient(circle farthest-side at bottom, ${lightColor}, ${deepColor})`}}></div>
            )
          })
        }
      </div>
    )
  }
}

export default EndSplitLine