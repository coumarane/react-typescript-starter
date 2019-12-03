import * as React from 'react';
import { Link } from 'react-router-dom';
import { IActions } from './DatatableModels';
import { IFopiBaseDto } from 'src/domain/fopi/FopiModels';

interface ISgDataGridProps {
  data?: IFopiBaseDto[];
  actions?: IActions[];
  // filteredDatas?: IFopiBaseDto[];
  // searchValue?: string;
}

interface ISgDataGridState {
  reservePolicies?: IFopiBaseDto[];
  // filteredDatas?: IFopiBaseDto[];
  // searchValue?: string;
}

class SgDataGrid extends React.Component<ISgDataGridProps, ISgDataGridState> {
  constructor(props: ISgDataGridProps) {
    super(props);
    this.state = { reservePolicies: [] };
  }
  componentDidMount() {
    let rpList: IFopiBaseDto[] = [];
    if (this.props.data) {
      rpList = this.props.data;
    }
    this.setState({ ...this.state, reservePolicies: rpList });
  }

  actionsContent = (id: string | number | undefined) => {
    const { actions } = this.props;
    return (
      <>
        <td>
          <Link
            to={`${actions && actions[0].link}/${id}`}
            className="btn btn-sm btn btn btn-dark btn-flat pull-left action-icon"
          >
            <i className="material-icons">{actions && actions[0].icon}</i>
          </Link>
        </td>
        <td>
          <Link
            to={`${actions && actions[1].link}/${id}`}
            className="btn btn-sm btn btn btn-dark btn-flat pull-left action-icon"
          >
            <i className="material-icons">{actions && actions[1].icon}</i>
          </Link>
        </td>
      </>
    );
  };

  handleWindowOpen = (url: string) => (
    e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.open(url, '_blank');
  };
  render() {
    const { reservePolicies } = this.state;
    return (
      <>
        <tbody>
          {reservePolicies &&
            reservePolicies.map((item, index) => {
              return (
                <tr key={index}>
                  <td scope="row">{item.Id}</td>
                  <td>{item.PayOffName}</td>
                  <td>{item.FopiDate}</td>
                  <td>{item.Maturity}</td>
                  <td>{item.FopiStatus}</td>

                  {this.actionsContent(item.Id)}
                </tr>
              );
            })}
        </tbody>
      </>
    );
  }
}

export default SgDataGrid;
