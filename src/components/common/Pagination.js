import React, { useEffect, useState } from "react";

const Pagination = (props) => {
    let [allPages, setAllPages] = useState([]);

    useEffect(() => {
        let tempArr = [];
        for (let i = 0; i < props.totalPages; i++) {
            tempArr.push(i + 1);
        }
        setAllPages(tempArr);
    }, [props.totalPages]);

    const isTruncated = function (pageIndex) {
        var total = props.totalPages;
        var current = props.currentPage;
        var page = pageIndex + 1;

        var distanceToCurrent = Math.abs(page - current);
        var isEdgePage = page === total || page === 1;

        if (!isEdgePage && distanceToCurrent > (props.isMobile ? 1 : 5)) {
            return true;
        }

        return false;
    };

    const renderPage = () => {
        let rightTruncatedCount = 0;
        let leftTruncatedCount = 0;

        return allPages.map((each, i) => {
            if (isTruncated(i)) {
                if (props.currentPage > i + 1) {
                    if (rightTruncatedCount < (props.isMobile ? 1 : 2)) {
                        rightTruncatedCount++;
                        return <div>...</div>;
                    } else {
                        return <></>;
                    }
                } else {
                    if (leftTruncatedCount < (props.isMobile ? 1 : 2)) {
                        leftTruncatedCount++;
                        return <div>...</div>;
                    } else {
                        return <></>;
                    }
                }
            } else if (!isTruncated(i)) {
                return (
                    <button
                        key={i}
                        className={`w-text-body-1 cursor-pointer be w-[2rem] h-[2rem] ${props.currentPage.toString() == each.toString()
                            ? "bg-primary text-white rounded"
                            : "bg-white text-jet hover:rounded hover:bg-primary hover:text-white"
                            }`}
                        onClick={() => props.goToSpecificPage(each)}
                    >
                        {each}
                    </button>
                );
            }
        });
    };

    return (
        <div className="btn-group items-center" >
            <div className="w-[2rem] h-[2rem] items-center justify-center flex cursor-pointer" onClick={() => props.prevPage()}>
                <img
                    className="w-[0.438rem] h-[0.688rem] rotate-180"
                    src="/icons/ic_arrow_page_active.svg"
                />
            </div>

            {renderPage()}
            <div className="w-[2rem] h-[2rem] items-center justify-center flex cursor-pointer" onClick={() => props.nextPage()}>
                <img
                    className="w-[0.438rem] h-[0.688rem]"
                    src="/icons/ic_arrow_page_active.svg"
                />
            </div>
        </div>
    );
};

export default Pagination;