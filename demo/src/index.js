import React, { Component } from "react";
import { render } from "react-dom";

import ReactBotUI from "../../src";
import "./demo.css";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.chat) {
      this.chat.handleToggle();
    }
  }

  render() {
    return (
      <div>
        <h1>Bot Ebolution</h1>
        <button onClick={this.handleToggle}>Activar Chatbot</button>
        <ReactBotUI
          dialogflow={{ accessToken: "367d6e3c1d1541fda87cb735eb570e4d" }}
          dialogHeightMax={350}
          isUserHidden={true}
          isVisible={false}
          ref={el => (this.chat = el)}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
