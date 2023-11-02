import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Login from "./features/auth/Login"
import Dashboard from "./components/Dashboard"
import Welcome from "./features/auth/Welcome"
import UserList from "./features/auth/users/UserList"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<LandingPage />}  />
      <Route path="login" element={<Login />} />

      <Route path="dashboard" element={<Dashboard />}>

        <Route index element={<Welcome/>} />
        
        <Route path="users">
          <Route index  element={<UserList />} />
        </Route>

      </Route>

    </Routes>
  );
}

export default App;
