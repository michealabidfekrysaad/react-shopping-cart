import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <main>
      <ul className="my-pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <Link
                to=""
                onClick={() => paginate(number)}
                className="my-page-link"
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Pagination;
