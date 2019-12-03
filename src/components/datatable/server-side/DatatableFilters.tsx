import * as React from 'react';
import { FormGroup, Label, Input, Col, Button, Row } from 'reactstrap';

interface IDatatableFiltersProps {
  search?: string;
  dataSource?: any;
  handleFilterInputSearch: (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => void;
  handleFilterClickSearch: (e: React.MouseEvent) => void;
  handleFilterClickClavierSearch: (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => void;
}

export const DatatableFilters: React.SFC<IDatatableFiltersProps> = props => {
  const {
    search,
    handleFilterInputSearch,
    handleFilterClickSearch,
    handleFilterClickClavierSearch
  } = props;
  return (
    <>
      {/* {sizePerPageList && sizePerPageList.length  > 0 &&
        <Col md={6}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="nbEntryToShow" className="mr-sm-2">
              Show
            </Label>
            <Input type="select" name="nbEntryToShow">
              {sizePerPageList &&
                sizePerPageList.map((item, index) => (
                  <React.Fragment key={index}>
                    <option value={item}>{item}</option>
                  </React.Fragment>
                ))}
            </Input>
          </FormGroup>
        </Col>
        } */}
      <Col md={6}>
        <FormGroup>
          <Label for="search">Search</Label>
          <Row>
            <Col md={9}>
              <Input
                type="text"
                name="search"
                value={search}
                onChange={handleFilterInputSearch}
                onKeyDown={handleFilterClickClavierSearch}
              />
            </Col>
            <Col md={3}>
              <Button color="secondary" onClick={handleFilterClickSearch}>
                Filter
              </Button>{' '}
            </Col>
          </Row>
        </FormGroup>
      </Col>
    </>
  );
};
