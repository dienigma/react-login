import React from "react";
import PropTypes from "prop-types";

const data = ["java", "javaScript", "angular", "python", "ruby"];

const DataList = props => {
  const { onSelect, selectedLan, getRepos } = props;
  return (
    <div>
      {data.map(tech => (
        <p
          onClick={() => onSelect(tech)}
          style={tech === selectedLan ? { color: "red" } : null}
        >
          {tech}
        </p>
      ))}
    </div>
  );
};

export default DataList;

DataList.propTypes = {
  selectedLan: PropTypes.string.isRequired
};
