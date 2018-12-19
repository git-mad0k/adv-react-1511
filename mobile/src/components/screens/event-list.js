import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'
import NavigatorComponent from '../common/navigator'
import { events } from '../../../fixtures'
import EventList from '../events/event-list'


const eventList = Object.entries(events).map(([id, event]) => ({ id, ...event }))
@inject('events')
class EventListScreen extends Component {
    static propTypes = {

    };
    componentDidMount = () => {
        this.props.events.fetchEventList()
    }

    render() {
        const { loading, entities } = this.props.events
        if (loading) {
            return (
                <View>
                    <Text>
                        Loading
                    </Text>
                </View>
            )
        }
        return <EventList events={entities} onEventPress={this.handleEventPress} />
    }

    handleEventPress = event => {
        this.props.navigation.navigate('event', { id: event.id })
    }
}

const styles = StyleSheet.create({
})

export default NavigatorComponent(EventListScreen)