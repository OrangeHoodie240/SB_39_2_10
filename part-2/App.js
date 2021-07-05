const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tweet, {
    username: "Look@MeFeet",
    name: "Froddo",
    date: "5/18/2012",
    message: "Heyyyyyyyyy bois"
  }), /*#__PURE__*/React.createElement(Tweet, {
    username: "SamTato",
    name: "Sam",
    date: "5/18/2012",
    message: "What is it now?"
  }), /*#__PURE__*/React.createElement(Tweet, {
    username: "Look@MeFeet",
    name: "Froddo",
    date: "5/18/2012",
    message: "Did you know we short?"
  }));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));

