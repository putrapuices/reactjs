import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
      title2: "Menu Minuman",
      inputValue: "Nasi Padang",
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //   cara pertama
  //   rubahData() {
  //     this.setState({ title: "Pilih Makanan" });
  //   }
  //cara kedua ini lebih disarankan
  rubahData() {
    this.setState((state, props) => {
      //   return { title: "Pilih Menu Makanan", title2: "Pilih Menu Minuman" };
      return { title: state.title2, title2: state.title };
    });
  }

  handleChange(e) {
    //penulisan dengan cara object setStatenya
    // this.setState({inputValue:e.target.value});
    // console.log(e.target.value);
    //penulisan dengan errow function
    const EventTarget = e.target.value;
    this.setState((state, props) => {
      return {
        inputValue: EventTarget,
      };
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>

        <br />
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Main;
