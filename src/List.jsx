// import React from 'react'
// import Person from './person';
// function List() {
//   let names = ['husna', 'sufiyan', 'jodon', 'husna']
//   return (
//     <div>
//       {names.map((names, index) => (
//         <h2 key={index}>{index} : {names}</h2>
//       ))}
//     </div>
//   )
// }

// export default List
// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

// import React, { useState, useEffect } from "react";

// function FetchData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const result = await response.json();
//       setData(result);
//     };

//     fetchData();

//     return () => {
//       console.log("Cleanup on unmount or dependency change");
//     };
//   }, []); // Empty array means effect runs once (on mount)

//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default FetchData;

// import React, { useContext, createContext } from "react";

// const ThemeContext = createContext("light");

// function ThemeButton() {
//   const theme = useContext(ThemeContext);

//   return <button style={{ background: theme === "dark" ? "#333" : "#FFF" }}>Theme</button>;
// }

// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <ThemeButton />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
