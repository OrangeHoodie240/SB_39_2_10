const Tweet = ({
  username,
  name,
  date,
  message
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, username, ", ", name, " @ ", date), /*#__PURE__*/React.createElement("p", null, message));
};

