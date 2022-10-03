import React from "react";
function Search({ searchTerm, onChangeSearch }) {
  function handleChange(event) {
    onChangeSearch(event.target.value);
  }
  return (
    <div className="container" id="search-container">
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card card-sm">
            <div className="card-body row no-gutters align-items-center">
              <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div>

              <div className="col">
                <input
                  className="form-control form-control-lg form-control-borderless"
                  type="search"
                  placeholder="Search topics or keywords"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </div>

              <div className="col-auto">
                <button
                  className="btn btn-lg btn-success"
                  type="submit"
                  id="search-button"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
