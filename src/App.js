import React, { Component } from "react";

import "./App.css";

class Form extends Component {
  state = {
    ID: 0,
    firstName: "",
    lastName: "",
    image: "",
    CollegeName: "",
    studentList: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImageChange = (e) => {
    const imgName = e.target.files[0].name;
    this.setState({ image: imgName });
    e.target.value = null;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const studentInfo = ` ${this.state.ID} ${this.state.firstName} ${this.state.lastName} ${this.state.image} ${this.state.CollegeName} `;
    this.setState({
      studentList: [...this.state.studentList, studentInfo],
      ID: 0,
      firstName: "",
      lastName: "",
      image: "",
      CollegeName: "",
    });
  };
  render() {
    return (
      <>
        <section style={{ margin: "3rem", fontSize: "2rem" }}>
          <img
            src="https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2020/12/logo_2500X1875-2048x1536.jpg"
            height="150px"
            width="150px"
            alt="College Logo"
          />
          <input
            type="number"
            name="ID"
            placeholder="ID"
            value={this.state.ID}
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          ></input>
          <input
            type="text"
            value={this.state.CollegeName}
            name="CollegeName"
            placeholder="College Name"
            onChange={this.handleChange}
          ></input>
          <span style={{ fontSize: "1rem" }}>
            Image:
            <input
              type="file"
              name="img"
              placeholder="file"
              onChange={this.handleImageChange}
              accept="image/png, image/gif, image/jpeg"
            ></input>
          </span>
          <button
            type="submit"
            className="btnFancy"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <div>
            Student List :
            <ul>
              {this.state.studentList.map((student, index) => (
                <li key={"student" + index}>{student}</li>
              ))}
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default class App extends Component {
  render() {
    return <Form />;
  }
}
