import React, { Component } from 'react'
import EndLine from '../../components/EndSplitLine'
import styles from './index.module.scss'

class EndSplitLine extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>卡片标题</h1>
          <main className={styles.content}>
            卡片内容
          </main>
          <EndLine />
        </div>
      </div>
    )
  }
}

export default EndSplitLine