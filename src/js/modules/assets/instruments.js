import React from 'react';
import { Platform, StyleSheet, Text, View, Button, } from 'react-native';
import { func, array } from 'prop-types';
import * as allAssetTypes from '../../data/allAssetTypes.json';
import { checkIfOption } from '../../utils/global';
import Dropdown from '../../components/dropdown';
import { fetchInstruments, fetchInstrumentDetails } from './queries';
import Stylesheet from '../../../styles/Stylesheet'
import { SearchBar, List, ListItem } from 'react-native-elements'

class Instruments extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            optionRoot: null,
            assetTypeTitle: 'Select AssetType',
            title: '',
            instruments: null,
            dropDownTitle:''
        };
    }

    handleAssetTypeSelection(eventKey) {
        if(eventKey) {
            fetchInstruments(eventKey, this.props, (response) => {
                console.log("Instruments on selecting Asset Type", response.Data);
                this.setState({instruments: response.Data});
            });
        }
    }

    handleInstrumentSelection(instrument, index) {
        const { onOptionRootSelected, onInstrumentSelected } = this.props;
        if (checkIfOption(instrument.AssetType)) {
            onOptionRootSelected(instrument);
        } else {
            fetchInstrumentDetails(this.state.instruments[index], this.props, (response) => {
                onInstrumentSelected(response);
            });
        }
        this.setState({ title: instrument });
    }

    render() {
        const { assetTypes } = this.props;
        const { assetTypeTitle, instruments, title, dropDownTitle } = this.state;
        return (
            <View>
                <SearchBar
                    placeholder='Type Here...' clearIcon onChangeText={this.handleAssetTypeSelection.bind(this)}/>
                {
                    (instruments) && (instruments.length !== 0) &&
                    <List containerStyle={{marginBottom: 20}}>
                        {
                            this.state.instruments.map((instrument, i) => (
                                <ListItem
                                    roundAvatar
                                    key={i}
                                    title={instrument.Description}
                                    onPress={() => this.props.navigation.navigate('Trade', {details: instrument})}
                                    />
                            ))
                        }
                    </List>
                }
            </View>
        );
    }
}

Instruments.propTypes = {
    onInstrumentSelected: func.isRequired,
    onAssetTypeSelected: func,
    onOptionRootSelected: func,
    assetTypes: array,
};

//export default bindHandlers(Instruments);
export default Instruments;
