import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../css/grid.css";
import musicService from "../services/music-group-service";

const tableHeaders = ["Group Name"];

export function ArtistList(props) {
  const navigate = useNavigate();
  const pageSize = props.pageSize || 10;

  const [currentPageNr, setCurrentPageNr] = useState(0);
  const [maxPageNr, setMaxPageNr] = useState(0);
  const [dataPage, setDataPage] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const service = new musicService(
        "https://seido-webservice-307d89e1f16a.azurewebsites.net/api"
      );
      const result = await service.readMusicGroupsAsync(
        currentPageNr,
        true,
        searchTerm,
        pageSize
      );
      setMaxPageNr(result.pageCount);
      setDataPage(result.pageItems);
    };
    fetchData();
  }, [currentPageNr, pageSize, searchTerm]);

  const handleRowClick = (musicGroupId) => {
    navigate(`/artist/${musicGroupId}`);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
    setCurrentPageNr(0);
  };

  return (
    <div className="container px-4 py-4 text-white" id="list-of-groups">
      <h2 className="pb-2 border-bottom">List of Music Bands</h2>
      <p>Below are some of the world's most famous music bands.</p>
      <p>Click on a band in the list for more details</p>

      <form
        onSubmit={onSearchSubmit}
        className="row g-2 align-items-center mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search music groups..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="col-md-4 col-lg-2">
          <button type="submit" className="btn btn-dark w-100">
            Search
          </button>
        </div>
      </form>

      <ArtistTable
        headers={tableHeaders}
        data={dataPage}
        currentPageNr={currentPageNr}
        maxPageNr={maxPageNr}
        onPrev={() => currentPageNr > 0 && setCurrentPageNr(currentPageNr - 1)}
        onNext={() =>
          currentPageNr < maxPageNr - 1 && setCurrentPageNr(currentPageNr + 1)
        }
        onRowClick={handleRowClick}
      />
    </div>
  );
}

export function ArtistTable({
  headers,
  data,
  currentPageNr,
  maxPageNr,
  onPrev,
  onNext,
  onRowClick,
}) {
  return (
    <>
      <div className="row mb-2 text-center">
        {headers.map((item, idx) => (
          <div
            key={idx}
            className="col-md-10 themed-grid-head-col border group-name-header">
            {item}
          </div>
        ))}
      </div>

      {data.map((row) => (
        <div
          key={row.musicGroupId}
          className="row mb-2 text-center"
          style={{ cursor: "pointer" }}
          onClick={() => onRowClick(row.musicGroupId)}>
          <div className="col-md-10 themed-grid-col">{row.name}</div>
        </div>
      ))}

      <div className="row mt-4">
        <div className="col-md-10 mx auto">
          <nav
            aria-label="List pagination"
            className="mt-4 d-flex justify-content-center">
            <ul className="pagination mb-0 ">
              <li
                className={`page-item ${
                  currentPageNr === 0 ? "disabled" : ""
                }`}>
                <button className="page-link" onClick={onPrev}>
                  &laquo; Prev
                </button>
              </li>

              <li className="page-item disabled">
                <span className="page-link">
                  Page {currentPageNr + 1} of {maxPageNr}
                </span>
              </li>

              <li
                className={`page-item ${
                  currentPageNr >= maxPageNr - 1 ? "disabled" : ""
                }`}>
                <button className="page-link" onClick={onNext}>
                  Next &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
