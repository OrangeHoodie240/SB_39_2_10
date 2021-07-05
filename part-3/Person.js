const Person = ({
  name,
  age,
  hobbies
}) => {
  let voteMsg = null;

  if (age >= 18) {
    voteMsg = 'please go vote!';
  } else {
    voteMsg = 'you must be 18';
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Learn some information about this person"), /*#__PURE__*/React.createElement("h3", null, voteMsg, " ", name.length > 8 ? name.slice(0, 6) : name), /*#__PURE__*/React.createElement("ul", null, hobbies.map(hobby => /*#__PURE__*/React.createElement("li", null, hobby))));
};

