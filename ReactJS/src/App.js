import React, { useRef } from 'react';
import  ComponentToPrint  from './ComponentToPrint';
import { useReactToPrint } from 'react-to-print';





function App() {

  return (
    <div>
      <ComponentToPrint/>
    </div>
  );
}

export default App;