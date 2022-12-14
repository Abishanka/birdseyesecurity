import { Link, useMatch, useResolvedPath } from "react-router-dom"
import * as boot from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Cape Canaveral Space Force Station
      </Link>
      <ul>
        <CustomLink to="/alarmlog">Alarm Log</CustomLink>
        <CustomLink to="/signin">Edit Alarm Data</CustomLink>
        <CustomLink to="/tutorial">Tutorial</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
