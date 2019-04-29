import React from "react";

const RepoList = props => {
  const { repos } = props;
  return (
    <div>
      {repos.map(repo => {
        return <p>{repo.name}</p>;
      })}
    </div>
  );
};

export default RepoList;
