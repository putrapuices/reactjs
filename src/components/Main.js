import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu Makanan",
    };
    this.rubahData = this.rubahData.bind(this);
  }
  //   cara pertama
  //   rubahData() {
  //     this.setState({ title: "Pilih Makanan" });
  //   }
  //cara kedua ini lebih disarankan
  rubahData() {
    this.setState((state, props) => {
      return { title: "Pilih Menu Makanan" };
    });
  }
  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <button onClick={this.rubahData}>Rubah Data</button>
      </div>
    );
  }
}

export default Main;
