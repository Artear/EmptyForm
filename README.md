# EmptyForm

ReactJS Form.

[![NPM](https://nodei.co/npm/emptyform.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/emptyform/)

It creates a generic wrapper for the form. So you need to add the content of the inside form, from another React Component.

EmptyForm will create the shell.
Take a look at ExampleForm to create your own form.
Take a look too, on how to call the content for the shell: <br/>

<code>
< EmptyForm insideForm={ < ContentInside /> } invalidFormAction="" submitValue="Publish it!" submitAction={this.submit}/>
</code> <br />

The submit method, will be on the wrapper, for the Empty Form, so you can hit a service or do whatever you need.

Params:
- {String} formClass The desired class for the form
- {Object} <ContentInside /> A class of ReactJS containing the elements that will be inside the form.
- {Function} submitAction The method to call as a callback, when Submit button is pressed.
- {Function} invalidFormAction When form is invalid, will call this action. Usefull to deactivate a submit button, for example.
- {Function} validFormAction When form is valid, will call this action. Usefull to activate a submit button, for example.
- {String} submitValue The label for the Submit button


To start the example:
- enter to Example folder.
- npm install
- npm start, will start a server, after build the files.
