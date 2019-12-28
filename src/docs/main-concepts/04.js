import React from "react";

// const Welcome1 = props => <h1>Hello, {props.name}</h1>;
//
// class Welcome2 extends React.Component {
//     // render 函数是必须的
//     render() {
//         return <h1>Hello, {this.props.name}</h1>
//     }
// }
//
// const App = () => (<div>
//     <Welcome1 name={'World'}/>
//     <Welcome2 name={'World'}/>
// </div>);

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64"
  }
};

const formatDate = date => {
    return date.toLocaleString();
};

const Avatar = props => {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
};

const UserInfo = props => {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
};

const Comment = props => {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
};

const App = () => {
  return (
    <Comment author={comment.author} text={comment.text} date={comment.date} />
  );
};

export default App;
