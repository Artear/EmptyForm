/*

@author Gonzalo Rubino on Thursday, September 8th, 2016, 10:54:00 AM
@version 1.0.13
@Description Example Publish Form

*/

import React from 'react';
import FRC from 'formsy-react-components';
import EmptyForm from './../../../src/EmptyForm';

const { Input, Textarea } = FRC;

const ContentInside = React.createClass({
  mixins: [FRC.ParentContextMixin],

  propTypes: {
      children: React.PropTypes.node
  },

  render() {
      return (
        <fieldset>
          <Textarea
            rows={3}
            cols={40}
            name="title"
            label="What happens?"
            placeholder="Ex: A car was hitten by a bus."
            validations="minLength:5"
            required
            validationErrors={{
                  minLength: 'This field is required. Insert at least 5 chars.'
              }}
          />
          <Textarea
            rows={3}
            cols={40}
            name="location"
            label="Where was it?"
            placeholder="Ex: Near the Avenue, at the end of the street."
            validations="minLength:5"
            required
            validationErrors={{
                  minLength: 'This field is required. Insert at least 5 chars.'
              }}
          />
          <Textarea
            rows={3}
            cols={40}
            name="body"
            label="Tell us more details please."
            placeholder="Ex: Fill it with your inner reporter!"
            validations="minLength:5"
            required
            validationErrors={{
                  minLength: 'This field is required. Insert at least 5 chars.'
              }}
          />
        <Input
          name="phone"
          type="tel"
          value=""
          label="Can you give us a number to get in contact for more info?"
          placeholder="Ejemplo: 54 911 4444 4444"
          validations="isNumeric,minLength:8"
          required
          validationErrors={{
                    minLength: 'Please enter a phone number.',
                    isNumeric: 'Please numbers only.'
                }}
        />
        <input className="btn btn-primary" type="submit" defaultValue={this.props.submitValue} />
      </fieldset>
      );
  }
});

export default class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formRef: 'emptyform',
      formClass: 'form-vertical',
      submitValue: 'Publish it!'
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(data) {
    console.log('Submited data: ', data);
  }

  render() {
    return (
      <EmptyForm
        insideForm={<ContentInside submitValue={this.state.submitValue}/>}
        submitAction={this.submitForm}
        formClass={this.state.formClass} />
    )
  }
}
