import React,{Component} from "react";

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:"Menu Makanan"
        };
        this.rubahaData = this.rubahaData.bind(this);
    }
rubahaData(){
    this.setState({title:"Pilih Makanan"});
}
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick={this.rubahaData}>Rubah Data</button>
            </div>
        );
    }
}

export default Main;