import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'
import Auth from '../auth'
import NavigatorComponent from '../common/navigator'


class AuthScreen extends Component {
    static propTypes = {

    };

    static navigationOptions = {
        title: 'Auth Screen'
    }

    render() {
        return <Auth {...this.props} />
    }

}

const styles = StyleSheet.create({
})

export default NavigatorComponent(AuthScreen)