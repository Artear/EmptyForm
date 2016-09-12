/*

@author Gonzalo Rubino on Thursday, September 8th, 2016, 10:54:00 AM
@version 1.0
@Description TN y La Gente Publish Form

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
              label="¿Que Pas&oacute;?"
              placeholder="Ejemplo: Un colectivo chocó contra un auto."
              validations="minLength:5"
              required
              validationErrors={{
                    minLength: 'Este campo es requerido. Ingrese al menos 5 caracteres.'
                }}
            />
            <Textarea
              rows={3}
              cols={40}
              name="location"
              label="¿D&oacute;nde y cu&aacute;ndo fue?"
              placeholder="Ejemplo: Ocurrió en Avellaneda, el sábado a las 10 de la mañana."
              validations="minLength:5"
              required
              validationErrors={{
                    minLength: 'Este campo es requerido. Ingrese al menos 5 caracteres.'
                }}
            />
            <Textarea
              rows={3}
              cols={40}
              name="body"
              label="Contanos m&aacute;s detalles o describ&iacute; tus fotos o videos"
              placeholder="Ejemplo: Un auto blanco circulaba a gran velocidad por la Avenida Mitre. Cruzó en rojo y chocó contra un colectivo."
              validations="minLength:5"
              required
              validationErrors={{
                    minLength: 'Este campo es requerido. Ingrese al menos 5 caracteres.'
                }}
            />
        <Input
          name="phone"
          type="tel"
          value=""
          label="¿A qu&eacute; n&uacute;mero de tel&eacute;fono podemos contactarte?"
          placeholder="Ejemplo: 54 (911) 4444 4444"
          validations="isNumeric,minLength:8"
          required
          validationErrors={{
                    minLength: 'Por favor ingrese un numero telefonico.',
                    isNumeric: 'Por favor ingrese solo numeros.'
                }}
        />
      </fieldset>
      );
  }
});

export default class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  submit(data) {
    console.log("SubmitData", data);
  }

  render() {
    return (
      <EmptyForm insideForm={<ContentInside />} submitValue="Publicar nota" submitAction={this.submit}/>
    );
  }

};
