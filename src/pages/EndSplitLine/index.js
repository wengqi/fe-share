import React, { Component } from 'react'
import EndLine from '../../components/EndSplitLine'
import styles from './index.module.scss'

class EndSplitLine extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>念奴娇·春情</h1>
          <main className={styles.content}>
            萧条庭院，又斜风细雨，重门须闭。<br />
            宠柳娇花寒食近，种种恼人天气。<br />
            险韵诗成，扶头酒醒，别是闲滋味。<br />
            征鸿过尽，万千心事难寄。<br /><br />
            楼上几日春寒，帘垂四面，玉阑干慵倚。<br />
            被冷香消新梦觉，不许愁人不起。<br />
            清露晨流，新桐初引，多少游春意。<br />
            日高烟敛，更看今日晴未。<br />
          </main>
          <EndLine />
        </div>
      </div>
    )
  }
}

export default EndSplitLine