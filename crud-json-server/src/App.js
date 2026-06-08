import React from "react";
import Lists from "./Lists";
import CreateList from "./CreateList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: ""
      }
    };
  }

  componentDidMount() {
    this.getLists();
  }

  getLists = () => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          loading: false,
          alldata: result
        });
      })
      .catch(console.log);
  };

  handleChange = (event) => {
    this.setState({
      singledata: {
        ...this.state.singledata,
        [event.target.name]: event.target.value
      }
    });
  };

  clearForm = () => {
    this.setState({
      singledata: {
        title: "",
        author: ""
      }
    });
  };

  createList = () => {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(() => {
      this.clearForm();
      this.getLists();
    });
  };

  getList = (event, id) => {
    this.setState({
      singledata: {
        title: "Loading...",
        author: "Loading..."
      }
    });

    fetch("http://localhost:5000/posts/" + id)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          singledata: {
            title: result.title,
            author: result.author
          }
        });
      });
  };

  updateList = (event, id) => {
    fetch("http://localhost:5000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(() => {
      this.clearForm();
      this.getLists();
    });
  };

  deleteList = (event, id) => {
    fetch("http://localhost:5000/posts/" + id, {
      method: "DELETE"
    }).then(() => {
      this.clearForm();
      this.getLists();
    });
  };

  render() {
    const listTable = this.state.loading ? (
      <span>Loading Data.......Please be patience.</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );

    return (
      <div className="container mt-4">
        <CreateList
          singledata={this.state.singledata}
          handleChange={this.handleChange}
          createList={this.createList}
          clearForm={this.clearForm}
        />

        <h3 className="mt-4">Book List</h3>

        {listTable}
      </div>
    );
  }
}

export default App;