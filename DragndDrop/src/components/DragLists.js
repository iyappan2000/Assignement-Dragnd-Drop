import React from 'react'

function DragLists() {
    return (
        <div className = 'App'>
            <div className = 'container'>
          <div className = 'items-title'>Ideas</div>
            <div className = 'item' draggable= "true">
                <p>Have a Good designer</p>
            </div>
            <div className = 'item' draggable= "true">
                  <p>Make sure the production department in aware of the start date</p>
            </div>
            <div className = 'item' draggable= "true">
               <p><p style={{padding:' 3px 5px ' ,backgroundColor:'tomato' ,width:'25%'}}>Coding</p>Lets try make and ready attachment</p>
            </div>
            <div className ='item' style ={{paddingTop:'20px'}} >
             
              <input type='text' placeholder = 'Add Title' />
            </div>
        </div>
        
        <div className = 'container'>
          <div className = 'items-title'>Tasks Proposed</div>
            
            <div className = 'item' draggable= "true">
                  <p><p style={{padding:' 3px 5px ' ,backgroundColor:'lightgreen' ,width:'25%'}}>Design</p>Make sure the production department in aware of the start date</p>
            </div>
           
            <div className ='item' style ={{paddingTop:'20px'}}>
             
              <input type='text' placeholder = 'Add Title' />
            </div>
        </div>

        <div className = 'container'>
          <div className = 'items-title'>Tasks Assigned</div>
            <div className = 'item' draggable= "true">
                <p><p style={{padding:' 3px 5px ' ,backgroundColor:'lightgreen' ,width:'25%'}}>Design</p>contact at departnment ideas personal</p>
            </div>
            <div className = 'item' draggable= "true">
                  <p>Check with hiring process</p>
            </div>
            <div className = 'item' draggable= "true">
               <p>Arrange for a meeting room to that we can interview possible designers</p>
            </div>
            <div className ='item' style ={{paddingTop:'20px'}}>
             
              <input type='text' placeholder = 'Add Title' />
            </div>
        </div>
        
        </div>
    )
}

export default DragLists
