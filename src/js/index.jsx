var App = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.valor}
            </div>
        );
    }
});

ReactDOM.render(<App valor="X" />, document.getElementById('milista'));
