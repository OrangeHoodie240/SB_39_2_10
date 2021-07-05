const App = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Person, {
    name: "Socrates",
    age: 2500,
    hobbies: ['philosophy', 'truth']
  }), /*#__PURE__*/React.createElement(Person, {
    name: "Baby Shark",
    age: 4,
    hobbies: ['Annoying music', 'Driving people insane', 'repetition']
  }), /*#__PURE__*/React.createElement(Person, {
    name: "Julius Caeser",
    age: 2000,
    hobbies: ['Military Conquest', 'Politics']
  }));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));

