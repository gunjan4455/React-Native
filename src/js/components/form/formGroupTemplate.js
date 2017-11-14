import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {FormInput, FormLabel } from 'react-native-elements';
import _ from 'lodash';
import { array, func } from 'prop-types';

function getSelectCtrl(item, onChange) {
    return (
        <FormInput componentClass="select" id={item.label} onChange={onChange} ref={item.label === 'OrderType' ? item.ref : null}>
            {
                _.map(item.value, (data, idx) =>
                    <option key={idx}>{item.DisplayField ? data[item.DisplayField] : data}</option>)
            }
        </FormInput>
    );
}

function getTextCtrl(item, onChange) {
    return (
        <FormInput
            readOnly={item.readOnly}
            id={item.label}
            type="text"
            value={item.value ? item.value : ''}
            onChange={onChange}
            placeholder="NA"
        />
    );
}

function FormGroupTemplate(props) {
    return (
        <View>
            <Text>Child</Text>
            { /*{
                    _.map(props.data, (item, idx) => (
                        <Col sm={3} key={idx}>
                            <FormLabel>{item.label}</FormLabel>
                            {item.componentClass === 'select' ? getSelectCtrl(item, props.onChange) : getTextCtrl(item, props.onChange)}
                        </Col>)
                    )
                }*/}
        </View>
    );
}

//FormGroupTemplate.propTypes = {
//    data: array,
//    onChange: func.isRequired,
//};

export default FormGroupTemplate;
