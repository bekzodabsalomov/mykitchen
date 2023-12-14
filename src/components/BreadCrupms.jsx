import { Link, useLocation } from "react-router-dom";
function BreadCrumps() {
  const location = useLocation();
  const currentLink = [];
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/`);
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink.join("")}> {crumb} </Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumps;
