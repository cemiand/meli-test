import React from "react";
import { Route, Switch } from "react-router-dom";
import { ItemDescriptionContainer } from "./containers/ItemDescriptionContainer";
import { ItemsListContainer } from "./containers/ItemsListContainer";
import { SearchBarContainer } from "./containers/SearchBarContainer";

function App() {
  return (
    <React.Fragment>
      <SearchBarContainer />
      <Switch>
        <Route exact path="/items" component={ItemsListContainer} />
        <Route exact path="/items/:id" component={ItemDescriptionContainer} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
