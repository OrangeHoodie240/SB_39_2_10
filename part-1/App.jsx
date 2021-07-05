
const App = ()=>{
    return (
                <div>
                    <FirstComponent /> 
                    <NamedComponent name='Steven' /> 
                </div>
            ); 
}; 


ReactDOM.render(<App /> , document.getElementById('root')); 