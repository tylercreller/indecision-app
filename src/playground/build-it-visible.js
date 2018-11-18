const appRoot = document.getElementById('app');
let showDetails = false;

const toggleDetails = () => {
    showDetails = !showDetails;
    render();
};

const getButtonName = () => {
    return !showDetails ? 'Show Details' : 'Hide Details'
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{getButtonName()}</button>
            {showDetails && (
                <p>Here are the details.</p>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();