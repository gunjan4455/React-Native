import React from 'react';
import { Platform, StyleSheet, Text, View, Button, } from 'react-native';
import Stylesheet from '../../../styles/Stylesheet';
import * as queries from './queries';

class Trade extends React.PureComponent {
    constructor() {
        super();
        this.subscription = {};
        this.handleSubscribe = this.handleSubscribe.bind(this);

        this.handlePriceUpdate = this.handlePriceUpdate.bind(this);
        this.currentOrder = {
            // default values on UI.
            Uic: '',
            AssetType: '',
            OrderType: 'Market',
            OrderPrice: 0.0,
            OrderDuration: { DurationType: 'DayOrder' },
            Amount: 0,
            AccountKey: '',
            BuySell: 'Buy',

            /* possible order relations
             IfDoneMaster   -   If Done Orders is a combination of an entry order and conditional orders
             If the order is filled, then a (slave) stop loss, limit or trailing stop
             will automatically be attached to the new open position
             IfDoneSlave    -   If Done Orders is a combination of an entry order and conditional orders
             If the order is filled, then a (slave) stop loss, limit or trailing stop
             will automatically be attached to the new open position
             IfDoneSlaveOco -   Slave order with OCO. See OCO.
             Oco            -   One-Cancels-the-Other Order (OCO). A pair of orders stipulating that if
             one order is executed, then the other order is automatically canceled
             StandAlone     -   No relation to other order
             */
            OrderRelation: 'StandAlone',
            ToOpenClose: 'ToOpen',
            Orders: [],

            // currently sample works for StandAlone orders only. Work to be done for other OrderRelations
        };

        this.takeProfitPrice = 0.0;
        this.stopLossPrice = 0.0;
        this.stopLossOrderType = 'StopLimit';

        // this is for storing reference of order type dropdown for resetting it later on.
        this.OrderTypeRef = null;

        this.state = {
            updated: false,
            responseData: {},
            selectedOptionSpace: null,
            selectedAccount: null,
            accounts: [],
            instrumentInfo: null,
            supportedOrderTypes: [],
            takeProfitOpen: false,
            stopLossOpen: false,
            optionRoot: null,
            instrument : {},
            infoPrices : {}
        };
    }

    handlePriceUpdate(data) {
        const { Data } = data;
        // we are taking 'Quote' only because we want only price updates (especially ask and bid).
        if (data && data.Quote) {
            this.setState({ instrumentInfo: data });
        }
    }

    handleSubscribe(instrument) {
        console.log("here===",this);
        queries.createSubscription(instrument, this.props, this.handlePriceUpdate, (subscription) => {
            this.subscription = subscription;
        });
    }

    handleUnsubscribe() {
        queries.removeSubscription(this.subscription, this.props, () => {
            this.subscription = null;
        });
    }

    componentWillMount() {
        queries.fetchInstrumentDetails(this.props.navigation.state.params.details, this.props, (res) => {
            console.log("instrumnet===============",res);

            queries.fetchInfoPrices(res, this.props, (response) => {
                console.log("infooooopppp",response, this);
                //this.setState({instrument : response, infoPrices : res})
                //this.currentOrder.Amount = response.Quote.Amount;
                //this.currentOrder.Uic = response.Uic;
                //this.currentOrder.AssetType = response.AssetType;
                //this.currentOrder.OrderPrice = response.Quote.Ask ? response.Quote.Ask : 0.0;
                //this.currentOrder.OrderType = instrument.SupportedOrderTypes[0];
                this.setState({
                    supportedOrderTypes: res.SupportedOrderTypes,
                    instrumentInfo: response
                }, ()=> {
                    console.log("gaurav=======", this);
                });
                this.handleUnsubscribe();
                this.handleSubscribe(res);
            });
        });
    }

    render() {
        return (
                <View style={[Stylesheet.FlexOne]}>
                    <Text> Ask Price : {this.state.instrumentInfo && this.state.instrumentInfo.Quote.Ask}</Text>
                    <Text> Bid Price : {this.state.instrumentInfo && this.state.instrumentInfo.Quote.Bid}</Text>
                </View>
        );
    }
}

export default Trade;
