console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Taco</li>
            <li>Taco</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);