import { Navigate } from "react-router-dom"

export default function PrivateRoute({Component}: any) {
  const authToken = true // A remplacer par js-cookies
  // localStorage.getItem("authToken")
  return authToken ? <Component /> : <Navigate to="/login" />
}