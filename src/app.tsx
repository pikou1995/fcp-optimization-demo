import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/header'
import Home from './components/home'
import Form from './components/form'
import Table from './components/table'
import Chart from './components/chart'
import Footer from './components/footer'

const { Content } = Layout

export default function App() {
  return (
    <Router>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/chart">
              <Chart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
      </Layout>
      <Footer />
    </Router>
  )
}
