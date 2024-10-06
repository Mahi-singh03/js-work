export default function Navbar(props) {
  const mystyle = {
    backgroundColor: "skyBlue",
    height: 30,
    lineHeight: 0.01,
    fontSize: 18,
    padding: 10,
    color: "black",
  };

  return (
    <>
      <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <div
            className={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.OC}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark mode
            </label>
          </div>
          
        </div>
      </nav>
    </>
  );
}
