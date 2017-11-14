import React from 'react';
import { func, bool } from 'prop-types';
import { checkIfOption, checkIfPutCallExpiry } from '../../utils/global';
import Instruments from './instruments';
import Options from './options';

class Assets extends React.PureComponent {
    constructor() {
        super();
        this.state = { optionRoot: null, putCallExpiryRequired: false, optionRootSelected: false };
        this.putCallExpiry = null;
        this.putCall = 'Call';
        this.expiryDate = moment();
        this.instrumentDetails = {};
    }

    handleOptionRoot(optionRoot) {
        this.setState({ optionRoot });
    }

    handleInstrumentSelection(instrumentDetails) {
        this.instrumentDetails = instrumentDetails;
        if (this.state.putCallExpiryRequired) {
            instrumentDetails.PutCall = this.putCall;
            instrumentDetails.Expiry = moment.utc(this.expiryDate).toISOString();
        }
        this.props.onInstrumentSelected(instrumentDetails);
    }

    handleAssetTypeChange(assetType) {
        if (checkIfOption(assetType)) {
            this.setState({
                optionRoot: null,
                optionRootSelected: true,
                putCallExpiryRequired: false,
            });
        } else if (checkIfPutCallExpiry(assetType)) {
            this.setState({
                optionRoot: null,
                optionRootSelected: false,
                putCallExpiryRequired: true,
            });
        } else {
            this.setState({
                optionRoot: null,
                optionRootSelected: false,
                putCallExpiryRequired: false,
            });
        }
    }

    handleExpiryDateChange(date) {
        this.expiryDate = date;
        this.handleInstrumentSelection(this.instrumentDetails);
    }

    handlePutCallChange(event) {
        this.putCall = event.target.value;
        this.handleInstrumentSelection(this.instrumentDetails);
    }

    render() {
        return (
            <div>
                <Instruments
                    {...this.props}
                    onInstrumentSelected={this.handleInstrumentSelection}
                    onOptionRootSelected={this.handleOptionRoot}
                    onAssetTypeSelected={this.handleAssetTypeChange}
                />
                {
                    this.state.optionRootSelected && this.state.optionRoot && this.props.showOptionsTemplate &&
                    <Panel bsStyle="primary">
                        <Options
                            optionRoot={this.state.optionRoot}
                            onInstrumentSelected={this.handleInstrumentSelection}
                            {...this.props}
                        />
                    </Panel>
                }
                {
                    this.state.putCallExpiryRequired && this.props.showOptionsTemplate &&
                    <Panel>
                        <Form>
                            <Row>
                                <Col sm={2}>
                                    <DatePicker selected={this.expiryDate} onChange={this.handleExpiryDateChange}/>
                                </Col>
                                <Col sm={2}>
                                    <FormControl componentClass="select" placeholder="Call"
                                        onChange={this.handlePutCallChange}
                                    >
                                        <option value="Put">Put</option>
                                        <option value="Call">Call</option>
                                    </FormControl>
                                </Col>
                            </Row>
                        </Form>
                    </Panel>
                }
            </div>
        );
    }
}

Assets.propTypes = {
    onInstrumentSelected: func.isRequired,
    showOptionsTemplate: bool,
};

Assets.defaultProps = { showOptionsTemplate: true };

//export default bindHandlers(Assets);
export default Assets;
