import React from "react";
// import { FaPlus } from 'react-icons/fa'

function Draglist({list,dragging,handleDragEnter,handletDragStart,getStyles}) {
  // const [Name, setName] = useState(data);
  // const [Addname, setAddname] = useState('');

  // const submitHandler = e => {
  //     e.preventDefault();
  //     addTask(Addname);
  //     setAddname('');
  // }

  // const handleChange = e => {
  //     setAddname(e.target.value);
  // }

  // const addTask = Addname => {
  //     let copy  = [...Name];
  //     copy = [...copy,{items:Addame}];
  //     setName(copy);
  // }

  
if (list)
  return (
    <div className="App">
      {list.map((grp, grpI) => {
        return (
          <div key={grp.title} className="container" onDragEnter={dragging && !grp.items.length?(e) => handleDragEnter(e,{grpI, itemI: 0}):null}>
            <div className="items-title">{grp.title}</div>
            <div>
              {grp.items.map((item, itemI) => {
                return (
                  <div
                    draggable
                    onDragStart={(e) => {
                        handletDragStart(e, { grpI, itemI });
                    }}
                    // onDragEnd = {(e) => handleDragEnd(e,{grpI,itemI})}
                    onDragEnter={dragging?(e) => {handleDragEnter(e, {grpI, itemI})}:null}
                    key={item}
                    className={dragging?getStyles({grpI, itemI}):"item"}
                  >
                    <p>{item}</p>
                  </div>
                );
              })}
              {/* <div className ='item' style ={{paddingTop:'20px',display:'flex'}} >
                                <input type='text' placeholder = 'Add Title' onChange = {handleChange} value = {Addname} style ={{marginRight:'10px'}}/>
                                <button style ={{padding:'7px'}} onSubmit = {submitHandler}><FaPlus/></button>
                            </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );else { return null}
}

export default Draglist;
