import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import $ from "jquery";

import {
    Row,
    Column,
    Button,
    Switch,
    Sizes,
    Callout,
    Colors
} from 'react-foundation';


class Form extends Component {
    constructor(props) {
        super(props);
        // this.abide;
        // this.form;
        this.state = {
            textarea: '',
            input: '',
            successMessage: false,
            errorMessage: 'none'
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillUpdate() {
        // this.abide = new Foundation.Abide($('#login-form'), {liveValidate: false});
        // this.form = $('#login-form');
        //
        // this.form.on('invalid.zf.abide', () => {
        //     console.log('invalid');
        //     this.disableSubmit();
        // });
        // this.form.on('valid.zf.abide', () => {
        //     console.log('valid');
        //     console.log(this.abide);
        //     if ($('.is-invalid-input', this.form).length == 0) this.enableSubmit();
        //
        // });


    }

    onChange(e) {
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
        // console.log(this.state.textarea);

    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.input === ''){
            this.setState({ errorMessage:'show' });
            console.log("error: ", this.state.errorMessage);
        } else {

        }


    }


    render() {
        return (
            <div className="form">
                <Row >
                    <Column large={8} offsetOnLarge={4}><h1>Foundation-React POC </h1></Column>

                </Row>

                <form data-abide noValidate id="form" onSubmit={this.handleSubmit}>
                    <Row className="container">
                        <Column medium={7} offsetOnMedium={3}>
                            <Callout color={Colors.ALERT} style={{display: this.state.errorMessage}} id="">
                                <h5>This is an alert panel</h5>
                                <p>It has an easy to override visual style, and is appropriately subdued.</p>
                                <a href="#">It's dangerous to go alone, take this.</a>
                            </Callout>
                        </Column>
                    </Row>

                    <Row className="container">
                        <Column medium={5} offsetOnMedium={4}>
                            <label><h6> HTML input field: </h6>
                                <input id="input field" type="text" name="input" aria-label="This is an input field" required
                                       onChange={this.onChange} value={this.state.input}/>
                                <span className="form-error">This Text is required</span>
                            </label>
                        </Column>
                    </Row>

                    <Row>
                        <Column medium={5} offsetOnMedium={4}>
                            <label>
                                <h6 > What books did you read over summer break?</h6>
                                <textarea id="textarea" aria-label="What books did you read over summer break?" placeholder="Type text here" name="textarea" onChange={this.onChange}
                                          value={this.state.textarea}></textarea>
                            </label>
                        </Column>
                    </Row>

                    <Row className="container">
                        <Column medium={5} offsetOnMedium={4}>
                            <label id="select-menu" role="listbox"><h6  aria-label="Select Menu"> Select Menu: </h6>

                                <select>
                                    <option value="husker">Husker</option>
                                    <option value="starbuck">Starbuck</option>
                                    <option value="hotdog">Hot Dog</option>
                                    <option value="apollo">Apollo</option>
                                </select>
                            </label>
                        </Column>
                    </Row>
                    <Row className="container" aria-label="A selection of checkboxes">
                        <Column medium={6} offsetOnMedium={4}>
                            <h6 > <span>Checkboxes:</span></h6>
                            <fieldset >
                                <legend aria-label="A selection of checkboxes"><p>Choose your favorite food</p></legend>
                                <input id="checkbox1" type="checkbox" aria-label="Pizza"/><label htmlFor="checkbox1">Pizza</label>
                                <input id="checkbox2" type="checkbox"/><label htmlFor="checkbox2">Hamburger</label>
                                <input id="checkbox3" type="checkbox"/><label htmlFor="checkbox3">Salad</label>
                            </fieldset>

                        </Column>
                    </Row>
                    <Row className="container">
                        <Column medium={6} offsetOnMedium={4}>
                            <h6> <span>Radio Buttons: </span></h6>
                            <label>
                                <fieldset aria-label="radio-buttons">
                                    <legend>Do you Like This page?</legend>
                                    <Switch size={Sizes.SMALL}/>

                                </fieldset>
                            </label>

                        </Column>
                    </Row>
                    <Row>
                        <Column medium={6} offsetOnMedium={6}>
                            <Button
                                type="submit"
                                size={Sizes.LARGE}>Submit
                            </Button>
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