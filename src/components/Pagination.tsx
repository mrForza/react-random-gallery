import "./Pagination.css"

export interface Pagination {
    totalItems: number
    perPage: number,
    setCurrentPage: any,
    currentPage: number
};


export const PaginationComponent = ({totalItems, perPage, setCurrentPage, currentPage}: Pagination) => {
    var pages = [];

    for (var i = 1; i <= Math.ceil(totalItems / perPage); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination-container">
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active pagination-button" : "pagination-button"}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};