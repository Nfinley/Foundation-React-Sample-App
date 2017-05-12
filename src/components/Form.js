import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import {Row, Column, Button, Switch, InputTypes, Sizes, Alignments, Menu, MenuItem} from 'react-foundation';


class Form extends Component {
    constructor(props) {
        super(props);
        // this.abide;
        // this.form;
        this.state = {submitDisabled: false, username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.form = $('#form');
        // this.abide = new Foundation.Abide($('#form'), {liveValidate: false});

    }
    handleSubmit(e) {
        e.preventDefault();


    }
    // enableSubmit() {
    //     this.setState({ submitDisabled: false });
    // }
    //
    // disableSubmit() {
    //     this.setState({ submitDisabled: true });
    // }

    render() {
        return (
            <div className="form">
                <Row >
                    <Column large={8} offsetOnLarge={4} > <h1>Foundation React POC </h1></Column>

                </Row>

                <form noValidate id="form" data-abide onSubmit={this.handleSubmit}>
                    <Row>
                        <Column medium={5} offsetOnMedium={4}>
                            <label> <h6> HTML input field: </h6>
                                <input type="text" name="name" aria-label="Input Text"/>
                            </label>
                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={4}>
                            <label className="" aria-label="Select Menu"> <h6> Select Menu: </h6>

                                <select>
                                    <option value="husker">Husker</option>
                                    <option value="starbuck">Starbuck</option>
                                    <option value="hotdog">Hot Dog</option>
                                    <option value="apollo">Apollo</option>
                                </select>
                            </label>
                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={4}>
                             <h6> Checkboxes: </h6>
                                <fieldset>
                                    <input id="checkbox1" type="checkbox"/><label htmlFor="checkbox1">Food</label>
                                    <input id="checkbox2" type="checkbox"/><label htmlFor="checkbox2">Wine</label>
                                    <input id="checkbox3" type="checkbox"/><label htmlFor="checkbox3">Cheese</label>
                                </fieldset>

                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={4}>
                            <label> <h6> Radio Buttons </h6>
                                    <Switch input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }} size={Sizes.TINY}/>
                                    <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }} size={Sizes.SMALL} active={{ text: 'Yes' }} inactive={{ text: 'No' }}/>
                                    <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>

                            </label>
                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={6}>
                            <Button type="submit" size={Sizes.LARGE}>Button </Button>
                        </Column>
                    </Row>

                </form>


            </div>
        );
    }
}

// Form.propTypes = {
//     handleSubmit: PropTypes.func,
// }
export default Form;