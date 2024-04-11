import NotConnectedLayout from "@/components/Layouts/NotConnectedLayout"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
  return (
    <div>
      <NotConnectedLayout>
        <div className="flex justify-center items-center">
          <img src="https://beratung.medizin.de/assets/img/404.svg" alt="404"/>
        </div>
        <h1 className="text-center mt-20 font-black text-4xl"> PAGE NOT FOUND </h1>
        <Link to='/home'>Home</Link>
      </NotConnectedLayout>
    </div>
  )
}