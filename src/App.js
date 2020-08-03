import React from "react";
import "./styles/App.scss";
import Navbar from "./components/layout/Navbar";
import Students from "./components/students/Students";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Student from "./components/students/Student";
import StudentForm from "./components/students/StudentForm";
import { Provider } from "react-redux";
import store, { rrfProps } from "./store";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

var App = () => {
  return (
    <>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <div className="App">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Students}></Route>
                <Route exact path="/student/:id" component={Student} />
                <Route exact path="/studentForm/:id?" component={StudentForm} />
              </Switch>
            </div>
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </>
  );
};

export default App;
