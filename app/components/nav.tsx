import { Link, NavLink, useNavigate } from "@remix-run/react";
import { useKeyPress } from "~/lib/use";
import { cn } from "~/lib/utils";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

export function Nav() {
  const navigate = useNavigate();
  useKeyPress("H", () => {
    console.log("Navigate to home");
    navigate("/", {
      preventScrollReset: true,
      unstable_viewTransition: true,
    });
  });
  useKeyPress("A", () => {
    console.log("Navigate to about");
    navigate("/about", {
      preventScrollReset: true,
      unstable_viewTransition: true,
    });
  });
  useKeyPress("P", () => {
    console.log("Navigate to projects");
    navigate("/projects", {
      preventScrollReset: true,
      unstable_viewTransition: true,
    });
  });
  return (
    <nav className="topbar">
      <Link to="/" tabIndex={-1}>
        <span className="logo" />
      </Link>
      <div className="main-menu space-x-2">
        {navItems.map((item) => {
          const itemNameLower = item.name.toLowerCase();
          return (
            <NavLink
              key={item.name}
              className={cn("relative nav-item", `nav-item-${itemNameLower}`)}
              to={item.path}
              unstable_viewTransition
              preventScrollReset>
              {item.name}
              <kbd className="absolute bottom-0 right-0">{item.name[0]}</kbd>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
