import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Form } from 'react-native-elements';
import PropTypes from 'prop-types';
import { object } from 'prop-types';
import FormGroupTemplate from './formGroupTemplate';
import * as queries from './queries';
//import Options from '../../modules/assets/options';

class FormTemplate extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            optionRoot: props.optionRoot,
            takeProfitOpen: false,
            stopLossOpen: false,
        };
        //
        //this.currentOrder = props.currentOrder;
        //this.takeProfitPrice = props.takeProfitPrice;
        //this.stopLossPrice = props.stopLossPrice;
        //this.stopLossOrderType = props.stopLossOrderType;
    }

    //componentWillReceiveProps(nextProps) {
    //    this.setState({
    //        optionRoot: nextProps.optionRoot,
    //    });
    //}
    //
    //handleValueChange(event) {
    //    const { getUpdatedValues } = queries;
    //    const updatedValues = getUpdatedValues(event, {
    //        currentOrder: this.currentOrder,
    //        takeProfitPrice: this.takeProfitPrice,
    //        stopLossPrice: this.stopLossPrice,
    //        stopLossOrderType: this.stopLossOrderType,
    //    }, this.Ask, this.Bid);
    //    this.currentOrder = updatedValues.currentOrder;
    //    this.takeProfitPrice = updatedValues.takeProfitPrice;
    //    this.stopLossPrice = updatedValues.stopLossPrice;
    //    this.stopLossOrderType = updatedValues.stopLossOrderType;
    //
    //    this.setState({ updated: !this.state.updated });
    //}
    //
    //handleProfitBtnClick() {
    //    this.setState({ takeProfitOpen: !this.state.takeProfitOpen });
    //}
    //
    //handleLossBtnClick() {
    //    this.setState({ stopLossOpen: !this.state.stopLossOpen });
    //}
    //
    //handleOrderPlace() {
    //    this.currentOrder.Orders = [];
    //
    //    const { getRelatedOrder } = queries;
    //    if (this.state.takeProfitOpen) {
    //        // Setup related order
    //        const order = getRelatedOrder('Limit', this.takeProfitPrice, this.currentOrder);
    //        this.currentOrder.Orders.push(order);
    //    }
    //    if (this.state.stopLossOpen) {
    //        // Setup another related order
    //        const order = getRelatedOrder(this.stopLossOrderType, this.stopLossPrice, this.currentOrder);
    //        order.StopLimitPrice = this.stopLossPrice;
    //        this.currentOrder.Orders.push(order);
    //    }
    //
    //    this.props.handlePlaceOrder(this.currentOrder);
    //}

    render() {
        /*const {
            instrumentInfo,
            optionRoot,
            handleInstrumentChange,
            supportedOrderTypes
        } =
            this.props;

        const {
            getAskBidFormData,
            getBuySellFormData,
            orderTypeDurationFormData,
            stopLossFormData,
            openCloseFormData,
            takeProfitFormData,
        } = queries;*/

        return (
            <View>
                <Text>Hello</Text>
                {/* row1 with ask/bid prices which are readonly*/}
                <FormGroupTemplate

                />
                { /*
                {/!* options row which shows only when some option is selected*!/}
                {this.state.optionRoot &&
                {/!*<Options {...this.props} optionRoot={optionRoot}
                    onInstrumentSelected={handleInstrumentChange}
                />*!/}
                }

                {/!* row2 with manual input ask/bid prices*!/}
                <FormGroupTemplate data={getBuySellFormData(this.currentOrder, instrumentInfo)}
                    onChange={this.handleValueChange}
                />

                {/!* row3 with manual input*!/}
                <FormGroupTemplate data={orderTypeDurationFormData(supportedOrderTypes, handleRef)}
                    onChange={this.handleValueChange}
                />
                {this.state.optionRoot &&
                <FormGroupTemplate data={openCloseFormData()} onChange={this.handleValueChange}/>
                }

                <FormGroup>
                    {/!* take profit section*!/}
                    <div>
                        <Button bsStyle="link" disabled={this.state.takeProfitOpen}
                            onClick={this.handleProfitBtnClick}
                        >Take Profit</Button>
                        <Collapse in={this.state.takeProfitOpen}>
                            <div>
                                <View>
                                    <FormGroupTemplate
                                        data={takeProfitFormData(this.takeProfitPrice)}
                                        onChange={this.handleValueChange}
                                    />
                                    <Button bsStyle="primary"
                                        onClick={this.handleProfitBtnClick}
                                    >Remove</Button>
                                </View>
                            </div>
                        </Collapse>
                    </div>

                    {/!* stop loss section*!/}
                    <div>
                        <Button bsStyle="link" disabled={this.state.stopLossOpen}
                            onClick={this.handleLossBtnClick}
                        >Stop Loss</Button>
                        {/!*<Collapse in={this.state.stopLossOpen}>
                            <div>
                                <View>
                                    <FormGroupTemplate data={stopLossFormData(this.stopLossPrice)}
                                        onChange={this.handleValueChange}
                                    />
                                    <Button bsStyle="primary"
                                        onClick={this.handleLossBtnClick}
                                    >Remove</Button>
                                </View>
                            </div>
                        </Collapse>*!/}
                    </div>
                </FormGroup>

                <View>
                    <View>
                            <Button bsStyle="primary" block onClick={this.handleOrderPlace}>
                                Place Order</Button>
                    </View>
                </View>*/}
            </View>
        );
    }
}

//FormTemplate.propTypes = {
//    instrumentInfo: PropTypes.object,
//    optionRoot: PropTypes.object,
//    handleInstrumentChange: PropTypes.func.isRequired,
//    supportedOrderTypes: PropTypes.array.isRequired,
//    currentOrder: PropTypes.object.isRequired,
//    queries: PropTypes.object.isRequired,
//    takeProfitPrice: PropTypes.object,
//    stopLossPrice: PropTypes.object,
//    stopLossOrderType: PropTypes.object,
//    handlePlaceOrder: PropTypes.func.isRequired,
//    handleRef: PropTypes.func.isRequired,
////};

FormTemplate.propTypes = { match: object };

FormTemplate.defaultProps = { match: {} };

export default FormTemplate
