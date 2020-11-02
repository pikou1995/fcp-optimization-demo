import { Carousel } from 'antd'
import React from 'react'
import List from './list'

const contentStyle = {
  height: '260px',
  color: '#fff',
  lineHeight: '260px',
  textAlign: 'center' as const,
  background: '#364d79',
  userSelect: 'none' as const,
}

export default function Home() {
  return (
    <div>
      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <div style={{ padding: 20 }}>
        <List />
      </div>
    </div>
  )
}
