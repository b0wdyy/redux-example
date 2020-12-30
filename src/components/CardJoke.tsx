import React from "react";
import { FortniteData } from "../types/FortniteData";

interface CardJokeProps {
  joke: FortniteData;
}

export const CardJoke: React.FC<CardJokeProps> = ({ joke }) => {
  return (
    <>
      <div className="card">
        <header className="card-header">
          <h3 className="card-header-title">{joke.type}</h3>
        </header>
        <div className="block">
          <div className="card-content">
            <div className="content">
              Wat je eerst zegt:{" "}
              <span className="has-text-weight-bold">{joke.setup}</span>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="card-content">
            <div className="content">
              Punchline:{" "}
              <span className="has-text-weight-bold">{joke.punchline}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
