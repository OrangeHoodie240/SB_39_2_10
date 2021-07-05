const App = ()=>{
    return (
            <div>
                <Person name='Socrates' age={ 2500 } hobbies={['philosophy', 'truth']} /> 
                <Person name='Baby Shark' age={ 4 } hobbies={['Annoying music','Driving people insane', 'repetition']} /> 
                <Person name='Julius Caeser' age={ 2000 } hobbies={['Military Conquest', 'Politics']} /> 
            </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));