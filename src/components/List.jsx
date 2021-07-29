import React from "react";

function createlists(items) {
  return <li> {items} </li>;
}

function List(props) {
  console.log(props.list);

  return <div>{props.list.map(createlists)}</div>;
}

export default List;
