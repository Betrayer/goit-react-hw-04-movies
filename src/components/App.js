import React, { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";
import { Switch, Route, Redirect } from "react-router-dom";
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const Navigation = lazy(() => import("./navigation/Navigation"));

const App = () => (
  <>
    <Suspense
      fallback={
        <div>
          <p>Please wait...</p>
        </div>
      }
    >
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
