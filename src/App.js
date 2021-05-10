import "./App.css";
import React, { Component } from "react";
import pic1 from "./MaxPlanck.jpg";

class App extends Component {
  constructor(props) {
    console.log("constructor()");
    super(props);
    this.state = {
      intervall: null,
      timer: 0,
      fullName: "Max Planck",

      bio:
        "Max Planck naît le 23 avril 1858 au no 17 de la Küterstraße2 (« rue des Bouchers »)3,N 1 à Kiel, dans le duché de Schleswig. Il est issu d’une famille nombreuse et bourgeoise. Ses arrière-grand-père et grand-père paternels sont professeurs de théologie, son père professeur de droit (il participa à la rédaction du code civil allemand), tandis que sa mère est issue d'une famille de pasteurs.",
      imgSrc: pic1,
      profession: "Physicien",
      shows: false,
    };
  }

  componentDidMount() {
    console.log(" componentDidMount()");
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }

  componentDidUpdate() {
    console.log("componentDidMount() ");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    clearInterval(this.state.intervall);
  }
  show = () => {
    this.setState({ shows: !this.state.shows });
  };
  render() {
    console.log("render()");
    return (
      <div className="App">
        <button onClick={this.show}> Profile</button>
        {this.state.shows ? (
        <div>
          <h1 style={{ color: "indigo" }}>{this.state.fullName}</h1>
          <img src={this.state.imgSrc} alt="Max Planck" />
          <h2 style={{ color: "lightblue" }}>{this.state.profession}</h2>
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid black",
              maxWidth: "100vw",
            }}
          >
            {this.state.bio}
          </div>
        )}
        ) : (<h3>Click the button</h3>)<h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default App;
