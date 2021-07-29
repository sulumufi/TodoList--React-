import React from "react";

function Items(props){
    const [isDone, setIsDone] = React.useState(false);


    function handleClick(event){
        setIsDone((prevVal)=>{
          return !prevVal;
        });
      }


      console.log(props);

    

    return(
        <div 
        onClick={()=>{
            props.onChecked(props.id)
            }}
             >
            <li  style={ isDone ? {textDecoration: "line-through"} : null }>
            {props.item}
            </li>
        </div>
    )

    

}


export default Items;