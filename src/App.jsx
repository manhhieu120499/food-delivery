import DefaultLayout from "./layouts/DefaultLayout";
import Footer from './layouts/Footer';
import { publicRoute, privateRoute } from "./routes";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Fragment } from "react";


function App() {
  const auth = {
    name: 'Alax',
    role: 'admin'
  }
  return (
    <>
      <Router>
        <Routes>
          {publicRoute.map((routeItem, index) => {
            let Layout = routeItem.layout;
            let Page = routeItem.page;
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {auth.role == 'admin' && privateRoute.map((routeItem, index) => {
              let Layout = routeItem.layout
              let Page = routeItem.page
              if(Layout == null) Layout = Fragment
              return <Route key={index} path={routeItem.path} element={
                <Layout>
                  <Page/>
                </Layout>
              }/>

          })}
        </Routes>
      </Router>
      <Toaster/>
    </>
  );
}

export default App;
