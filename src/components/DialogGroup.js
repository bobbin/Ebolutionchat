import React, { Component } from "react";

const Message = props => (
  <div className="message" style={props.isImageHidden ? { margin: 0 } : {}}>
    {props.text === null ? <TypingAnimation /> : <p>{props.text}</p>}
  </div>
);

const TypingAnimation = props => (
  <div id="wave">
    <span className="dot" />
    <span className="dot" />
    <span className="dot" />
  </div>
);

export const UserImage = props => <img className="img-user" alt="User" />;

export const BotImage = props => <img className="img-bot" alt="Bot" />;

export const BotSadImage = props => <img className="img-sad-bot" alt="Bot" />;

class DialogGroup extends Component {
  render() {
    const happy = this.props.isHappyOrNot;

    const image = this.props.group.isUser ? (
      this.props.isUserHidden ? (
        <div />
      ) : (
        <UserImage />
      )
    ) : happy ? (
      <BotImage />
    ) : (
      <BotSadImage />
    );
    const messages = this.props.group.messages.map((text, i) => (
      <Message
        key={i}
        text={text}
        isImageHidden={this.props.group.isUser && this.props.isUserHidden}
      />
    ));

    return (
      <div
        className={`group group-${this.props.group.isUser ? "user" : "bot"}`}
      >
        {image}
        {messages}
      </div>
    );
  }
}
export default DialogGroup;
