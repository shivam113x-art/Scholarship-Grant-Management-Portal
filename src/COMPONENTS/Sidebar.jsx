import { useNavigate } from "react-router-dom";

function Sidebar({ links, title }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>{title}</h2>

      <ul>
        {links.map((link, index) => (
          <li
            key={index}
            onClick={() => navigate(link.path)}
          >
            {link.icon} {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;