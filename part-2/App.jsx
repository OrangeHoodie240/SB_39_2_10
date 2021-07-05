const App = ()=>{
    return (
        <div>
            <Tweet username='Look@MeFeet' name='Froddo' date='5/18/2012' message='Heyyyyyyyyy bois' />
            <Tweet username='SamTato' name='Sam' date='5/18/2012' message='What is it now?' />
            <Tweet username='Look@MeFeet' name='Froddo' date='5/18/2012' message='Did you know we short?' />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));