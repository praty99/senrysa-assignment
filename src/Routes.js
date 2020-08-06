import React, { Suspense, lazy } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout";
const CreateStore = lazy(() => import("./modules/CreateStore"));
//const ForgotPassword = lazy(() => import("./modules/forgotPassword"));

const Routes = props => (
    <main>

    <Layout>
        
    
            <Suspense fallback={<div>...Loading</div>}>
                <Switch>
                    <Route
                        path="/create-store"
                        exact
                        render={() => (
                            <CreateStore {...props} />
                        )}
                    />
                    <Route path="/" render={() => (
                        <CreateStore {...props} />
                    )} />
                </Switch>
            </Suspense>
        
        </Layout>
    </main>
);

export default Routes;