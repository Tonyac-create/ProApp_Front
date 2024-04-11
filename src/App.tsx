import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Announces from "./pages/Announces";
import { QueryClient, QueryClientProvider } from "react-query";
import PrivateRoute from "./utils/privateRoute";
import NotFoundPage from "./utils/NotFoundPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="home" element={<PrivateRoute Component={Home} />} />
          <Route path="account" element={<PrivateRoute Component={Account} />} />
          <Route path="announces" element={<PrivateRoute Component={Announces} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
