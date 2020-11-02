import React from 'react'
import { List, message, Avatar, Spin } from 'antd'

import InfiniteScroll from 'react-infinite-scroller'

function fetchData(callback: (data: any) => void) {
  setTimeout(() => {
    callback({
      results: [
        {
          gender: 'female',
          name: { title: 'Miss', first: 'Carla', last: 'Cortes' },
          email: 'carla.cortes@example.com',
          nat: 'ES',
        },
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Minnie', last: 'Hall' },
          email: 'minnie.hall@example.com',
          nat: 'US',
        },
        {
          gender: 'male',
          name: { title: 'Mr', first: 'Pepijn', last: 'Leuverink' },
          email: 'pepijn.leuverink@example.com',
          nat: 'NL',
        },
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Julia', last: 'Brown' },
          email: 'julia.brown@example.com',
          nat: 'CA',
        },
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Estelle', last: 'Robin' },
          email: 'estelle.robin@example.com',
          nat: 'FR',
        },
        {
          gender: 'female',
          name: {
            title: 'Miss',
            first: 'Carla',
            last: 'Cortes',
          },
          email: 'carla.cortes@example.com',
          nat: 'ES',
        },
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Minnie', last: 'Hall' },
          email: 'minnie.hall@example.com',
          nat: 'US',
        },
        {
          gender: 'male',
          name: { title: 'Mr', first: 'Pepijn', last: 'Leuverink' },
          email: 'pepijn.leuverink@example.com',
          nat: 'NL',
        },
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Julia', last: 'Brown' },
          email: 'julia.brown@example.com',
          nat: 'CA',
        },
        {
          gender: 'female',
          name: { title: 'Ms', first: 'Estelle', last: 'Robin' },
          email: 'estelle.robin@example.com',
          nat: 'FR',
        },
      ],
    })
  }, 1000)
}

export default class InfiniteListExample extends React.Component {
  state = {
    data: [] as any[],
    loading: true,
    hasMore: true,
  }

  componentDidMount() {
    fetchData((res) => {
      this.setState({
        data: res.results,
        loading: false,
      })
    })
  }

  handleInfiniteOnLoad = () => {
    let { data } = this.state
    this.setState({
      loading: true,
    })
    if (data.length > 20) {
      message.warning('Infinite List loaded all')
      this.setState({
        hasMore: false,
        loading: false,
      })
      return
    }
    fetchData((res) => {
      data = data.concat(res.results)
      this.setState({
        data,
        loading: false,
      })
    })
  }

  render() {
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
        >
          <List
            dataSource={this.state.data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={item.name.last}
                  description={item.email}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div style={{ textAlign: 'center' }}>
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    )
  }
}
