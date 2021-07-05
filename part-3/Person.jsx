

const Person = ({name, age, hobbies})=>{
    let voteMsg = null; 
    if(age >= 18){
        voteMsg = 'please go vote!'; 
    }
    else{
        voteMsg = 'you must be 18';
    }

    return (
                <div>
                    <p>Learn some information about this person</p>
                    <h3>{ voteMsg } { (name.length > 8) ? name.slice(0,6) : name }</h3>
                    <ul>
                        { hobbies.map(hobby => <li>{ hobby }</li>) }
                    </ul>
                </div>
    );
}; 