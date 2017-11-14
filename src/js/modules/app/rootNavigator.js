import { StackNavigator } from 'react-navigation';
import UserInfo from '../userInfo/index'
import Orders from '../orders/index'
import Home from '../home/home'
import Trade from '../trade/index'

const RootNavigator = StackNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Test Page',
        },
    },

    AddToken: {
        screen: UserInfo,
        navigationOptions: {
            headerTitle: 'Add Token',
        },
    },

    Orders : {
        screen : Orders,
         navigationOptions: {
            headerTitle: 'Orders',
        },
    },

    Trade : {
        screen : Trade,
        navigationOptions: {
            headerTitle: 'Trade',
        },
    },
});

export default RootNavigator;