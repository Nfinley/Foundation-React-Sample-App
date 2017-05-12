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
                            <label> <p> HTML input field: </p>
                                <input type="text" name="name" aria-label="Name Field"/>
                            </label>
                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={4}>
                            <label className="" aria-label="Name Field"> <p> Select Menu: </p>

                            </label>
                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={4}>
                             <p> Checkboxes </p>
                                <fieldset>
                                    <input id="checkbox12" type="checkbox"/><label htmlFor="checkbox12">Checkbox 1</label>
                                    <input id="checkbox22" type="checkbox"/><label htmlFor="checkbox22">Checkbox 2</label>
                                    <input id="checkbox32" type="checkbox"/><label htmlFor="checkbox32">Checkbox 3</label>
                                </fieldset>

                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={4}>
                            <label> <h4> Radio Buttons </h4>
                                    <Switch aria-label="radio-buttons" input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }} size={Sizes.TINY}/>
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