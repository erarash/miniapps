import React from "react";
import styles from "../css/App.css";
import ScoreBoard from "./ScoreBoard.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: ""
    };
    this.pinSelect = this.pinSelect.bind(this);
  }

  componentDidMount() {
    this.pinSelect();
  }

  pinSelect(number) {
    this.setState({
      pins: number
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>10 PIN BOWLING!</h1>

        <div className={styles.buttons}>
          <div className={styles.button} onClick={() => this.pinSelect("1")}>
            1
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("2")}>
            2
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("3")}>
            3
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("4")}>
            4
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("5")}>
            5
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("6")}>
            6
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("7")}>
            7
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("8")}>
            8
          </div>
          <div className={styles.button} onClick={() => this.pinSelect("9")}>
            9
          </div>
          <div className={styles.buttonSpace} />
          <div className={styles.button} onClick={() => this.pinSelect("10")}>
            10
          </div>
        </div>
        <ScoreBoard />
      </div>
    );
  }
}
