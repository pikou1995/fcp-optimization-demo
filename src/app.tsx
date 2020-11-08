import React, { Suspense, lazy } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import Home from './components/home'

const Form = lazy(
  () =>
    import(
      /* webpackChunkName: "form" */
      './components/form'
    )
)

const Table = lazy(
  () =>
    import(
      /* webpackChunkName: "table" */
      './components/table'
    )
)

const Chart = lazy(
  () =>
    import(
      /* webpackChunkName: "chart" */
      './components/chart'
    )
)

const { Content } = Layout

export default function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Content>
          <Suspense fallback={<div style={{ textAlign: 'center' }}><Spin /></div>}>
            <Switch>
              <Route path="/form" component={Form} />
              <Route path="/table" component={Table} />
              <Route path="/chart" component={Chart} />
              <Route path="/" component={Home} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
      <Footer />
    </Router>
  )
}
