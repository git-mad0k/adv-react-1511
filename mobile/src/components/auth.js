import React, { Component } from 'react'
import { View, Text, TextInput, Button, Platform } from 'react-native'
import IsValidEmail from './is-valid-email'
import { observer, inject } from 'mobx-react'
import fb from '../services/api'
@inject('auth')
@observer
class Auth extends Component {
    static propTypes = {

    };

    pushToEvent = () => {
        this.props.navigation.navigate('eventList')
    }

    render() {
        const { email, password, isAuthorized } = this.props.auth
        if (isAuthorized) {
            return <View>
                <Text>You are already logged in</Text>
                <View>
                    <Button title="Go to Event" onPress={this.pushToEvent} />
                </View>
            </View>
        }
        return (
            <View>
                <View style={styles.container}>
                    <Text style={{ fontSize: 40 }}>Email: </Text>
                    <TextInput value={email} onChangeText={this.handleEmailChange} style={styles.input} />
                </View>
                <IsValidEmail />
                <View>
                    <Text>Password: </Text>
                    <TextInput value={password} onChangeText={this.handlePasswordChange}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Button title="Sign In" onPress={this.handleSignIn} />
                </View>

            </View>
        )
    }

    handleEmailChange = (email) => this.props.auth.setEmail(email)
    handlePasswordChange = (password) => this.props.auth.setPassword(password)

    handleSignIn = () => {
        const { email, password } = this.props.auth
        fb.signIn(email, password)
            .then(data => {
                this.props.auth.signIn(data)
                this.props.navigation.navigate('eventList')
            })

    }
}

const styles = {
    container: {
        flexDirection: 'row'
    },
    input: {
        ...Platform.select({
            ios: {
                width: 100
            },
            android: {
                width: 200
            }
        }),
        borderBottomWidth: 1
    }
}

export default Auth