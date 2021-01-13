import React from "react";
import Table from "react-bootstrap/Table";
import ListItem from "../ListItem";

const List = () => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Type</th>
          <th>Weaknesses</th>
        </tr>
      </thead>
      <tbody>
        <ListItem />
      </tbody>
    </Table>
  );
};

export default List;
