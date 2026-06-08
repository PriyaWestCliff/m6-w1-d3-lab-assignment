import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

function Lists(props) {
  let listrows = [];

  props.alldata.forEach((element) => {
    listrows.push(
      <tr key={element._id}>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td>
          <UpdateList
            elementId={element._id}
            singledata={props.singledata}
            getList={props.getList}
            updateList={props.updateList}
            handleChange={props.handleChange}
          />

          <DeleteList
            elementId={element._id}
            singledata={props.singledata}
            getList={props.getList}
            deleteList={props.deleteList}
          />
        </td>
      </tr>
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
}

export default Lists;