import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('navigator')
@observer
  export default (WrappedComponent) =>
    class NavigatorComponent extends Component {

      componentDidMount() {
        const { navigator, navigation: { state: data } } = this.props
        navigator.setCurrent(data.routeName, data.params ? data.params.id : '')
      }
      componentWillMount() {
        const { navigator, navigation: { state: data } } = this.props
        navigator.setPrevious(data.routeName, data.params ? data.params.id : '')
      }
      render() {
        return <WrappedComponent {...this.props} />
      }
    }

