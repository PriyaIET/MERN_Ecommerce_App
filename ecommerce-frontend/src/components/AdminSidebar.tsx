import { IconType } from "react-icons"
import { Location, Link } from "react-router-dom"


const AdminSidebar = () => {
  return <aside>
    <h2>Logo.</h2>
    <div>
        <h5>
            Dashboard
        </h5>
    </div>
  </aside>
}

interface LiProps {
    url: string,
    text: string,
    location: Location,
    Icon: IconType
}

const Li =({url, text, location, Icon}:LiProps)=> <li>
    <Link to={url}>
    <Icon/>
    {text}
    </Link>
</li>
export default AdminSidebar