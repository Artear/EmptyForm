# EmptyForm

ReactJS Form for Artear.

It creates a generic wrapper for the form. So you need to add the content of the inside form, from another React Component.

EmptyForm will create the shell.
Take a look at ExampleForm to create your own form.
Take a look too, on how to call the content for the shell: <br/>
<code>
	< EmptyForm insideForm={ <ContentInside /> } submitValue="Publicar nota" submitAction={this.submit}/>
</code> <br />
The submit method, will be on the wrapper, for the Empty Form, so you can hit a service or do whatever you need.

To install:
- Clone the repo.
- npm install
- npm start, will start a server, after build the files.
