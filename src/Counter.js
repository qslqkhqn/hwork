import { useState } from 'react';
import Buttons from './Buttons';
import Numbers from './Numbers';

function Counter() {
    const [counter, setCounter] = useState(0);
    return(
        <div>
          <Buttons counter={counter}/>
          <Numbers counter={counter} setCounter={setCounter}/>  
        </div>
        
        
    )
}

export default Counter;