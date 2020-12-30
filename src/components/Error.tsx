import React from "react";
import { ErrorType } from "../types/ErrorType";

interface ErrorProps {
  message: ErrorType;
}

export const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <div className="notification is-danger">
      <button className="delete"></button>
      {message}
    </div>
  );
};
