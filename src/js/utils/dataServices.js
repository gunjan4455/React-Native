//import ab from 'jquery';
//window.$=window.jQuery;

//import ab from "jquery-deferred";
import _ from 'lodash';
import {saxo} from 'openapi-clientlib';
import signalr from 'react-native-signalr';
import sd from '../libs/jquery-3.1.1';
var t = require('openapi-clientlib');
console.log('t', t, saxo);
 //console.log("window================",ab);
 //console.log("saxoooooooooooooo",saxo);
//console.log("$",$);
console.log("window",window);
window.$ = window.jQuery;
console.log('signalr',signalr);
window.$.connection = _.partial(signalr.hubConnection);
const transportUrl = 'https://gateway.saxobank.com/sim/openapi';
const streamingUrl = 'https://streaming.saxotrader.com/sim/openapi';

let transport;
let streaming;
let prevTokenState = '';
const priceFormatter = new window.saxo.PriceFormatting();
const subscriptions = [];

export function getTransportAuth(authToken = 'default_token') {
    if (!transport || prevTokenState !== authToken) {
            transport = new window.saxo.openapi.TransportAuth(transportUrl, { token: authToken });
        prevTokenState = authToken;
    }
    return transport;
}

export function getStreamingObj(authToken = 'default_token') {
    if (!streaming || prevTokenState !== authToken) {
        streaming = new window.saxo.openapi.Streaming(getTransportAuth(authToken), streamingUrl, { getToken: () => authToken });
        prevTokenState = authToken;
    }
    return streaming;
}

export function getData(params) {
    return getTransportAuth(params.accessToken).get(params.serviceGroup, params.endPoint, null, {
        queryParams: params.queryParams,
    });
}

export function postData(params) {
    return getTransportAuth(params.accessToken).post(params.serviceGroup, params.endPoint, null, {
        queryParams: params.queryParams,
        body: params.body,
    });
}

export function formatPrice(price, decimal, formatFlags) {
    return priceFormatter.format(price, decimal, formatFlags);
}

export function subscribe(params, onUpdate, onError) {
    const subscription = getStreamingObj(params.accessToken).createSubscription(params.serviceGroup, params.endPoint, params.queryParams, onUpdate, onError);
    subscriptions.push(subscription);
    return subscription;
}

export function disposeIndividualSubscription(accessToken, subscription) {
    getStreamingObj(accessToken).disposeSubscription(subscription);
}
