import * as React from 'react';
import Pagination from 'reactstrap/lib/Pagination';
import PaginationItem from 'reactstrap/lib/PaginationItem';
import PaginationLink from 'reactstrap/lib/PaginationLink';

interface ISgPaginationProps {
    pageCount: number;
    blockSize: number;
    currentPage: number;
    total: number;
    paginationSize: number; // max de nbre de pages à afficher 
    handleChangePage: (currentPage: number, rowCount: number) => void;
}

interface ISgPaginationState {
    pageCount: number;
    blockSize: number;
}

class SgPagination extends React.Component<ISgPaginationProps, ISgPaginationState> {
    constructor(props: ISgPaginationProps) {
        super(props);
        // init state
        const { pageCount, blockSize } = this.props;
        this.state = {
            pageCount,
            blockSize,
        }
    }

    handleClickPage = (currentPage: number, rowCount: number) => (e: React.MouseEvent) => {
        e.preventDefault();
        console.log(currentPage, rowCount);
        // update store
        this.props.handleChangePage(currentPage, rowCount)
    }

    listPagination = () => {
        const { blockSize } = this.state;
        const pagesNumbers: any[] = []
        const pages: any[] = this.getPages();
        pages.map((item, index) => {
            pagesNumbers.push(
                <PaginationItem
                    active={
                        this.props.currentPage === item ? true : false
                    }>
                    <PaginationLink onClick={this.handleClickPage(item, blockSize)}> {item}</PaginationLink>
                </PaginationItem>
            )
        })
        return (
            <>
                {
                    pagesNumbers.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item}
                            </React.Fragment>
                        )
                    })
                }
            </>
        )
    }

    getPages = () => {
        const { blockSize, paginationSize, total } = this.props;
        const sizePerPage = blockSize;

        let currentPage = this.props.currentPage;

        const totalPages = Math.ceil(total / sizePerPage);

        if (currentPage < 1) {
            currentPage = 1;
        } else if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        let startPage: any = 0;
        let endPage: any = 0;

        if (totalPages <= paginationSize) {
            startPage = 1;
            endPage = totalPages;
        } else {
            const maxPagesBeforeCurrentPage = Math.floor(paginationSize / 2);
            const maxPagesAfterCurrentPage = Math.ceil(paginationSize / 2) - 1;

            if (currentPage <= maxPagesBeforeCurrentPage) {
                startPage = 1;
                endPage = paginationSize;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                startPage = totalPages - paginationSize + 1;
                endPage = totalPages;
            } else {
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }

        return Array.from(Array(endPage + 1 - startPage).keys()).map(
            i => startPage + i
        );
    };


    render() {
        const { blockSize, pageCount } = this.state;
        const { currentPage } = this.props;
        return (
            <>
                <Pagination size="md" aria-label="Page navigation example">
                    <PaginationItem >
                        <PaginationLink onClick={this.handleClickPage(1, blockSize)} first="true" href="#">
                            <i className="material-icons">
                                first_page
                            </i>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={this.handleClickPage(currentPage - 1, blockSize)} previous href="#">
                            <i className="material-icons">
                                chevron_left
                            </i>
                        </PaginationLink>
                    </PaginationItem>
                    {this.listPagination()}
                    <PaginationItem>
                        <PaginationLink onClick={this.handleClickPage(currentPage + 1, blockSize)} next href="#">
                            <i className="material-icons">
                                chevron_right
                            </i>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={this.handleClickPage(pageCount, blockSize)} last="true" href="#">
                            <i className="material-icons">
                                last_page
                            </i>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </>
        );
    }
}

export default SgPagination;