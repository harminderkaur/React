import React, {useState, useEffect} from 'react';

function Counter (){
  // Declare a new state variable, which we'll call "count"

  const [count, setCount] = useState(0)   

  // Similar to componentDidMount and componentDidUpdate:

  useEffect(() => {
     document.title = `you clicked ${count} times`
  });

  return(
      <div>
      <div>
         Your clicke {count} times.
      </div>
      <button onClick={() => setCount (count + 1)}>Click</button>
      </div>
  )
}

export default Counter;