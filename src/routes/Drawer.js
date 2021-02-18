import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from '../views/Home'
import Produtos from '../views/Produtos'
import Lojas from '../views/Lojas'

const routeDrawer = createDrawerNavigator()

const Drawer = () => {
    return (
    <routeDrawer.Navigator initialRouteName="Início">
        <routeDrawer.Screen name="Início" component={Home}/>
        <routeDrawer.Screen name="Produtos" component={Produtos}/>
        <routeDrawer.Screen name="Nossas Lojas" component={Lojas}/>
    </routeDrawer.Navigator>
    )
}

export default Drawer