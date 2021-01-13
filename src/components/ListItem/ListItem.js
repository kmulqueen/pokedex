import React from "react";

const ListItem = ({ number, name, type, weaknesses }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      {type.length ? <td>{type}</td> : <td>No Type Found</td>}
      {weaknesses.length ? <td>{weaknesses}</td> : <td>No Weaknesses Found</td>}
    </tr>
  );
};

export default ListItem;
