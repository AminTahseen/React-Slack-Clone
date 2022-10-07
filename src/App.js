import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import { SlackProvider } from "./context-api/slack-context-api";
import ChannelDashboard from "./pages/Channel-Dashboard";
import ChannelDetails from "./pages/Channel-details";
import Home from "./pages/Home";
import SignUp from "./pages/Sign-Up";
import Threads from "./pages/Threads";
import NotFound from "./pages/Not-Found";
import ProtectedRoute from "./auth/protected-route";
import GeneralChannel from "./pages/General-channel";

const App = () => {
  return (
    <SlackProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />

          <Route exact path="/channel/:name" element={<ProtectedRoute />}>
            <Route path="/channel/:name" element={<ChannelDashboard />} />
          </Route>

          <Route
            exact
            path="/channel/thread/:name"
            element={<ProtectedRoute />}
          >
            <Route path="/channel/thread/:name" element={<Threads />} />
          </Route>

          <Route
            exact
            path="/channel/details/:channel"
            element={<ProtectedRoute />}
          >
            <Route
              path="/channel/details/:channel"
              element={<ChannelDetails />}
            />
          </Route>
          <Route
            exact
            path="/channel/general/:channel"
            element={<ProtectedRoute />}
          >
            <Route
              path="/channel/general/:channel"
              element={<GeneralChannel />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </SlackProvider>
  );
};

export default App;
