import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import EmptyForm from './components/EmptyForm';
import ExampleForm from './components/ExampleForm';

// Render the main component into the dom
ReactDOM.render(<EmptyForm insideForm={<ExampleForm />} submitValue="Publicar nota" />, document.getElementById('app'));