import "../css/header.css";
const Header = ({ arr, setArr }) => {
  const onSearch = (event) => {
    const filteredData = arr?.filter((data) =>
      data.toLowerCase().includes(event?.target?.value)
    );
    console.log(filteredData);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            Stock Market
          </a>
          <button
            className="btn search-button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Search
          </button>
        </div>
      </nav>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="ms-auto me-auto">
                {/* <input type="search" /> */}
                <select
                  className="w-300 minHeight-40 p-2 be-none"
                  onChange={(event) => onSearch(event)}
                >
                  {arr.map((optionValue) => (
                    <option value={optionValue}>{optionValue}</option>
                  ))}
                </select>
                <button className="btn  bs-none">
                  <i style={{ fontSize: "24px" }} className="fa">
                    &#xf002;
                  </i>
                </button>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
