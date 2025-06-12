"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { FC } from "react";
import "./style.scss";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

type PaginationProps = {
  totalPages: number;
};

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    router.push(`?page=${page}`);
  };

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, startPage + 2);

  return (
    <nav className="pagination">
      <div className="container">
        <span className={`buttonNav ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            type="button"
            className="pageLink"
            onClick={() => goToPage(currentPage - 1)}
          >
            <BsArrowLeft />
            <span> Prev</span>
          </button>
        </span>
        <ul className="paginationContainer ">
          {startPage > 1 && (
            <li className="pageItem">
              <button
                type="button"
                className="pageLink"
                onClick={() => goToPage(1)}
              >
                1
              </button>
            </li>
          )}
          {startPage > 2 && (
            <li>
              <span>..</span>
            </li>
          )}
          {[...Array(endPage - startPage + 1)].map((_, index) => {
            const page = startPage + index;
            return (
              <li
                key={page}
                className={`pageItem ${currentPage === page ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="pageLink"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}
          {endPage < totalPages - 1 && (
            <li>
              <span>..</span>
            </li>
          )}
          {endPage < totalPages && (
            <li className="pageItem">
              <button
                type="button"
                className="pageLink"
                onClick={() => goToPage(totalPages)}
              >
                {totalPages}
              </button>
            </li>
          )}
        </ul>
        <span
          className={`buttonNav ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            type="button"
            className="pageLink"
            onClick={() => goToPage(currentPage + 1)}
          >
            <span>Next</span>
            <BsArrowRight />
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Pagination;
