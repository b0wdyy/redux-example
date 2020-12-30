import React from "react";

interface LoadingProps {
  loading: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <progress className="progress is-small is-primary" max="100">
      15%
    </progress>
  );
};
