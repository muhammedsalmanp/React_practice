import { useState } from 'react'
import './App.css'
import HelloWorld from './helloword'
import NewFile from "./classscomponat"
import Hi12 from './Hellog'
import Greet from './greet'
import Greet1 from './greetinClss'
import Myclss from './Messages'
import COUNTER from './COUNTER'
import Destructuring from './Destructuring '
import FunClik from "./FunClik"
import Bind from './bind'
import UserGreet from './UserGreet'
import List from './List'
import Person from './person'
import UseCounder from './useCounder'
import Timer from './timer'
import Hide from './Hide'
import Input from './Input'
import Timer1  from './Timer1'

function App() {
  const [activeComponent, setActiveComponent] = useState(null); // Track active component

  // Render selected component or main menu
  return (
    <div>
      {activeComponent && (
        <button onClick={() => setActiveComponent(null)}>Go Back</button>
      )}

      {/* Main Menu - Shows if no component is active */}
      {!activeComponent && (
        <>
          <h1>Main menu</h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>

            <button onClick={() => setActiveComponent('timer')}>Open Timer (in class)</button>
            <button onClick={() => setActiveComponent('counter')}>Open Counter</button>
            <button onClick={()=> setActiveComponent ('input')}>Open inputer</button>
            <button onClick={()=> setActiveComponent ('timer1')}>Open Timer</button>
          </div>
        </>

      )}

      {/* Dynamic Component Rendering */}
      {activeComponent === 'timer' && <Timer />}
      {activeComponent === 'counter' && <COUNTER />}
      {activeComponent === 'input'&& <Input/>}
      {activeComponent === 'timer1'&& <Timer1/>}
    </div>
  );
}

export default App
