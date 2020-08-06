import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout";
import "./App.scss";

const CreateStore = lazy(() => import("./modules/CreateStore"));
const CreateStores = lazy(() => import("./modules/CreateStores"));
const ViewStore = lazy(() => import("./modules/ViewStore"));
const CreateOrder = lazy(() => import("./modules/CreateOrder"));
const ViewOrder = lazy(() => import("./modules/ViewOrder"));

export default function App() {
  return(
    <Router>
    <Layout>
        <div className="app">
    
            <Suspense fallback={<div>...Loading</div>}>
                <Switch>
                    <Route
                        path="/create-store"
                        exact
                        render={() => (
                            <CreateStore />
                        )}
                    />
                    <Route
                        path="/createstores"
                        exact
                        render={() => (
                            <CreateStores />
                        )}
                    />
                    <Route
                        path="/viewstore"
                        exact
                        render={() => (
                            <ViewStore />
                        )}
                    />
                    <Route
                        path="/createorder"
                        exact
                        render={() => (
                            <CreateOrder />
                        )}
                    />
                    <Route
                        path="/vieworder"
                        exact
                        render={() => (
                            <ViewOrder />
                        )}
                    />
                    <Route path="/" render={() => (
                        <CreateStore />
                    )} />
                </Switch>
            </Suspense>
            </div>
        
        </Layout>
    </Router>
  )
}