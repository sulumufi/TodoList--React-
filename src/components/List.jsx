import React from "react";
import Items from "./Items";


function List(props) {

  console.log("------------>",props);
  function delete_item(id){
    props.useState_set((prev_items)=>{

      return prev_items.filter(
        (item, index )=>{
          return index !== id;
        }
      )

    })
  }


  function createlists(items, index) {
    return (<Items key={index} id={index} item = {items} onChecked = {delete_item}/>);
  }
  

  return (<div> 
    {props.list.map(createlists)}
  </div> );
}

export default List;
