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
    Colors,
    InputTypes,
    SwitchInput
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
                                <fieldset aria-label="Select-menu" role="listbox" id="select-menu">
                                    <legend aria-label="Select-menu" >Select Menu:</legend>
                                    <select>
                                        <option value="husker" role="menuitem">Husker</option>
                                        <option value="starbuck" role="menuitem">Starbuck</option>
                                        <option value="hotdog" role="menuitem">Hot Dog</option>
                                        <option value="apollo" role="menuitem">Apollo</option>
                                    </select>
                                </fieldset>


                        </Column>
                    </Row>
                    <Row className="container">
                        <Column medium={6} offsetOnMedium={4}>
                            <h6 > <span>Checkboxes:</span></h6>
                            <fieldset aria-label="checkboxes">
                                <legend >Choose your favorite food</legend>
                                <input id="checkbox1" type="checkbox" role="checkbox" value="Pizza"/><label htmlFor="checkbox1">Pizza</label>
                                <input id="checkbox2" type="checkbox" role="checkbox" value="Hamburger"/><label htmlFor="checkbox2">Hamburger</label>
                                <input id="checkbox3" type="checkbox" role="checkbox" value="Salad"/><label htmlFor="checkbox3">Salad</label>
                            </fieldset>

                        </Column>
                    </Row>
                    <Row className="container">
                        <Column medium={6} offsetOnMedium={4}>
                            <h6> <span>Radio Buttons: </span></h6>
                                <fieldset aria-label="radio-buttons">
                                    <legend >Who is favorite soccer team?</legend>
                                    <label htmlFor="liverpool"> Liverpool</label><Switch role="radio" id="liverpool" size={Sizes.SMALL} input={{type: InputTypes.RADIO, name: 'soccergroup', defaultChecked: 'true' }}/>
                                    <label htmlFor="chelsea">Chelsea </label><Switch role="radio" id="chelsea" size={Sizes.SMALL} input={{type: InputTypes.RADIO, name: 'soccergroup' }}/>
                                    <label htmlFor="manchester-city">Manchester City</label><Switch role="radio" id="manchester-city" size={Sizes.SMALL} input={{type: InputTypes.RADIO, name: 'soccergroup' }}/>
                                </fieldset>
                        </Column>
                    </Row>
                    <Row className="container">
                        <Column medium={6} offsetOnMedium={4}>
                            <fieldset aria-label="confirm-your-agreement">
                                <legend>Select:</legend>
                                <input id="confirm-checkbox" type="checkbox" /><label htmlFor="confirm-checkbox">I agree to the terms and conditions</label>
                            </fieldset>

                        </Column>
                    </Row>
                    <Row>
                        <Column medium={4} offsetOnMedium={4}>
                            <Button style={{marginRight: '20px'}} color={Colors.SECONDARY}  isHollow id="back-button">Back</Button>
                            <Button
                                type="submit"
                                id="next-button"
                                >Submit
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