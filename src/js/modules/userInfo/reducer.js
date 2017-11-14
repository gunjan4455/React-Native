import * as actionTypes from './actiontypes';
import _ from 'lodash';
 //
 //const initialState = {
 //    accessToken: '',
 //    userData: {},
 //};

const initialState = {
        accessToken: "eyJhbGciOiJFUzI1NiIsIng1dCI6IkQ0QUU4MjQ2RDYyNTBFMTY5Njg4NDFCREY4Nzc2MTI4NUMwNUJCMUYifQ.eyJvYWEiOiI3Nzc3MCIsImlzcyI6Im9hIiwiYWlkIjoiMTA5IiwidWlkIjoieUdDRjctMHZwZ0drZzZzTjdjOTMtQT09IiwiY2lkIjoieUdDRjctMHZwZ0drZzZzTjdjOTMtQT09IiwiaXNhIjoiRmFsc2UiLCJ0aWQiOiIyMDAyIiwic2lkIjoiOTdlMjg2NDZjNjE4NDU3NWJiNGI4M2VlYzBkMWY0OTMiLCJkZ2kiOiI4NCIsImV4cCI6IjE1MTA2NTgzNzkifQ.VLDd7CQ0e4ku1txeMBGgz7ZniuTCMCoS9U_HvanmJBggUGyZekX2fEPLWajTrk-Zb7IiR6x9EWsm_dy7pvwJ5w",
        ClientKey: "yGCF7-0vpgGkg6sN7c93-A==",
        Culture: "en-GB",
        Language: "en",
        LastLoginStatus: "Successful",
        LastLoginTime: "2017-11-02T11:53:30.663000Z",
        Name: "gunjan jain",
        TimeZoneId: 26,
        UserId: "8256369",
        UserKey: "yGCF7-0vpgGkg6sN7c93-A==",
        LegalAssetTypes: ["FxSpot", "FxForwards", "FxVanillaOption", "FxKnockInOption", "FxKnockOutOption", "FxOneTouchOption", "FxNoTouchOption", "ContractFutures", "FuturesStrategy", "Stock", "Bond", "FuturesOption", "StockIndexOption", "StockOption", "CfdOnStock", "CfdOnIndex", "CfdOnFutures", "StockIndex"]

    };

function _updateUserInfo(state, data) {
    return _.defaults({ ...data }, state);
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_USER_INFO:
            return _updateUserInfo(state, action);

        default:
            return state;
    }
}
