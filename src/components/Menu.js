import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Menu = (props) => {
    return (
        <View style={{alignItems: 'flex-end', padding:15, fontFamily: 'monospace', backgroundColor: 'rgba(0, 166, 207, 0.800)'}}>
            <TouchableOpacity onPress={() => {
                props.navigation.openDrawer();
                setTimeout(() => {
                    props.navigation.closeDrawer();
                }, 10000)
            }}>
                <Text style={{fontSize: 30}}>Menu</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu;