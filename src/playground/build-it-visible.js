const appRoot = document.getElementById('app');
let showDetails = false;

const toggleDetails = () => {
    showDetails = !showDetails;
    render();
};

const getDetails = () => {
    return showDetails ? <p>Here are the details.</p> : null;
}

const getButtonName = () => {
    return !showDetails ? 'Show Details' : 'Hide Details'
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{getButtonName()}</button>
            {getDetails()}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();