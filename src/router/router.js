import React from 'react'

const Main = React.lazy(() => import('../pages/Main'))
const EndSplitLine = React.lazy(() => import('../pages/EndSplitLine'))

export const routerData = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/end-split-line',
    component: EndSplitLine,
    name: '卡片底部分割线CSS实现技巧'
  }
]
