import React from 'react';
import Draglist from './components/Draglist'
// import DragLists from './components/DragLists';
import DragContent from './components/DragContent';

function App() {
  const data = [
    {
       title :'Ideas',
       items:[
           'Have a Good designer',
           'Lets try make and ready attachment',
           'iam a frontend Developer'
       ]
   },
   {
       title:'Tasks Proposed',
       items:[
           'Make sure the production department in aware of the start date',
           
       ]
   },
   {
       title:'Tasks Assigned',
       items:[
           'contact at departnment ideas personal',
           'Check with hiring process',
           'Arrange for a meeting room to that we can interview possible designers'
       ]
   }
]
  
  return (
  
      <div className = "App">
        
          {/* <DragLists/> */}
          <Draglist />
          <DragContent data = {data}/>
          {/* <One/> */}
    </div>
   
  )
}

export default App

