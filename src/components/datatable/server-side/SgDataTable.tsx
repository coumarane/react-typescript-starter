import { Table, Spinner, Row, Col, CardHeader } from 'reactstrap';
import * as React from 'react';
import { ISgDataTableProps } from './SgDataTableContainer';
import SgDataGrid from './sg-grid/SgDataGrid';
import SgPagination from './SgPagination';
import { DatatableFilters } from './DatatableFilters';
import { IFopiBaseDto } from 'src/domain/fopi/FopiModels';

interface ISgDataTableState {
  datas?: IFopiBaseDto[];
  pageCount: number;
  blockSize: number;
  currentPage: number;
  total: number;
  searchText: string;
  // filteredDatas?: IFopiBaseDto[];
  // searchValue?: string;
}

class SGDataTable extends React.Component<
  ISgDataTableProps,
  ISgDataTableState
> {
  constructor(props: ISgDataTableProps) {
    super(props);
    // init state
    this.state = {
      datas: [],
      pageCount: 0,
      blockSize: 10, // par defaut 10 lignes per page
      currentPage: 1, // par defaut current page 1
      total: 0,
      searchText: ''
    };
  }

  componentDidMount = async () => {
    // first time , we charge first page with(currentPage:1,rowCount:10)
    const { blockSize } = this.state;
    await this.props.handleChangePage(1, blockSize);
  };

  componentWillReceiveProps(nextProps: ISgDataTableProps) {
    const data = nextProps.fopiStore.getFopisPaged.data;
    if (
      !nextProps.fopiStore.getFopisPaged.loading &&
      data &&
      data.Data
      // && data.Data.length > 0
    ) {
      const datas = data.Data;
      const pageCount = data.PageCount;
      const currentPage = data.CurrentPage;
      const total = data.Total;
      this.setState({ datas, pageCount, currentPage, total });
      // charge Total
    }
  }

  handleFilterInputSearch = (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    const searchText = (e.target as any).value;
    this.setState({ ...this.state, searchText });
  };

  handleFilterClickSearch = (e: React.MouseEvent) => {
    this.search();
  };

  handleFilterClickClavierSearch = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 13) {
      this.search();
    }
  };

  /***
   * Search
   */
  search = async () => {
    const { datas, blockSize, currentPage, searchText } = this.state;
    if (searchText && datas && datas.length > 0) {
      const searchKeyword = searchText.toLowerCase();
      await this.props.handleChangePage(currentPage, blockSize, searchKeyword);
    }
  };

  render() {
    const {
      datas,
      pageCount,
      blockSize,
      currentPage,
      total,
      searchText
    } = this.state;
    const { loading } = this.props.fopiStore.getFopisPaged;
    // console.log(` datas : ${datas}`)
    return (
      <>
        {loading ? (
          <div className="row">
            <div className="rcol-md-12">
              <Spinner color="primary" />
            </div>
          </div>
        ) : (
          <React.Fragment>
            <CardHeader className="filters">
              {datas && datas.length > 0 && (
                <DatatableFilters
                  search={searchText}
                  handleFilterInputSearch={this.handleFilterInputSearch}
                  handleFilterClickSearch={this.handleFilterClickSearch}
                  handleFilterClickClavierSearch={
                    this.handleFilterClickClavierSearch
                  }
                />
              )}
            </CardHeader>

            <Table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>PayOffName</th>
                  <th>Date</th>
                  <th>Maturity</th>
                  <th>Status</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <SgDataGrid
                data={datas}
                actions={[
                  { link: `/fopis/:id/edit`, icon: 'edit' },
                  { link: '/fopis/:id/summary', icon: 'pageview' }
                ]}
              />
            </Table>

            <Row>
              <Col md={4}>
                <strong>Total : {total}</strong>
              </Col>
              {total > 0 && (
                <Col md={8}>
                  <SgPagination
                    paginationSize={5}
                    total={total}
                    pageCount={pageCount}
                    blockSize={blockSize}
                    currentPage={currentPage}
                    handleChangePage={this.props.handleChangePage}
                  />
                </Col>
              )}
            </Row>
          </React.Fragment>
        )}
      </>
    );
  }
}

export default SGDataTable;
