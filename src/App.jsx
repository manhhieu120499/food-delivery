import DefaultLayout from "./layouts/DefaultLayout";
import Footer from './layouts/Footer';
import { publicRoute } from "./routes";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
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
        </Routes>
      </Router>
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
