console.log('App.js is running');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};
const appRoot = document.getElementById('app');

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const renderApp = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>
				{app.options && app.options.length
					? 'Here are your options'
					: 'No options'}
			</p>
			<p>{app.options.length}</p>
			<button disabled={app.options.length < 2} onClick={onMakeDecision}>
				What should I do?
			</button>
			<button onClick={onRemoveAll}>Remove All</button>
			<ol>
				{app.options.map(option => (
					<li key={option}>{option}</li>
				))}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

const onRemoveAll = e => {
	e.preventDefault();
	app.options = [];
	renderApp();
};

const onFormSubmit = e => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderApp();
	}
};

renderApp();
