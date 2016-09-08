# EmptyForm

ReactJS Form for Artear.

It creates a wrapper. So you need to add the content of the inside form, from another React Component.

EmptyForm will create the shell.
Take a look at ExampleForm to create your own form.
Take a look too, to index.js on how to call the content for the shell: <br/>
<code>
ReactDOM.render(<EmptyForm insideForm={<ExampleForm />} submitValue="Submit button text" />, document.getElementById('app'));
</code>

To install:
- Clone the repo.
- npm install
- npm start, will start a server, after build the files.
