import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

export default function FooterComponent() {
  const thisYear = new Date().getFullYear()
  return (
    <Footer style={{ textAlign: 'center' }}>
      Copyright © {thisYear} pikou
    </Footer>
  )
}
