import React, { useEffect } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./redux/store";
import { getData } from "./redux/actions/fortniteActions";
import { Container } from "./partials/Container";
import { DefaultState } from "./types/DefaultState";
import { Error } from "./components/Error";
import { CardJoke } from "./components/CardJoke";
import { Loading } from "./components/Loading";

const App = () => {
  const dispatch = useDispatch();
  const jokeState: DefaultState = useSelector(
    (state: RootStore) => state.fortnite
  );

  useEffect(() => {
    console.log(jokeState);
  }, [jokeState]);

  return (
    <Container>
      {jokeState.error && <Error message={jokeState.error} />}

      <button
        className={`button is-primary ${jokeState.loading ? "is-loading" : ""}`}
        onClick={() => dispatch(getData())}
      >
        click me
      </button>

      {jokeState.data && !jokeState.loading ? (
        jokeState.data.map((data) => (
          <div className="my-4" key={data.id}>
            <CardJoke joke={data} />
          </div>
        ))
      ) : (
        <div className="my-5">
          <Loading loading={jokeState.loading} />
        </div>
      )}
    </Container>
  );
};

export default App;
