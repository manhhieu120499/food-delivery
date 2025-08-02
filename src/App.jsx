import DefaultLayout from "./layouts/DefaultLayout";
import Footer from "./layouts/Footer";
import { publicRoute, privateRoute } from "./routes";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/auth/slice";

function App() {
  const auth = useSelector((state) => state.AuthSlice.user);
  const dispatch = useDispatch();
  if (Object.keys(auth).length == 0) {
    try{
       const user = JSON.parse(localStorage.getItem("user"))
        if (user){
          dispatch(login(user));
        }
    }catch {
      localStorage.setItem('user', null)
    }
   
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
          {privateRoute.map((routeItem, index) => {
            let Layout = routeItem.layout;
            let Page = routeItem.page;
            if (Layout == null) Layout = Fragment;
            return (
              <Route
                key={index}
                path={routeItem.path}
                element={
                  auth?.role == "admin" ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <div>404 NOT FOUND</div>
                  )
                }
              />
            );
          })}
        </Routes>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
