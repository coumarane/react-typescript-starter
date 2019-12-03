import { connect } from 'react-redux';
import { IStoreState } from 'src/domain/StoreModels';
import { IFopiState } from 'src/domain/fopi/FopiReducers';
import { getFopisPagedResultAction } from 'src/domain/fopi/FopiActions';

/**
 * SgDataTable Props
 */

interface ISgDataTableStateProps {
  fopiStore: IFopiState;
}

interface ISgDataTableDispatchProps {
  handleChangePage: (currentPage: number, rowCount: number, searchText?:string) => void;
}

export type ISgDataTableProps = ISgDataTableStateProps & ISgDataTableDispatchProps

const mapStateToProps = (store: IStoreState): ISgDataTableStateProps => ({
  fopiStore: store.fopiStore
});

const mapDispatchToProps = (dispatch: any): ISgDataTableDispatchProps => ({
  handleChangePage: async (currentPage: number, rowCount: number, searchText?:string) => {
    await dispatch(getFopisPagedResultAction.request({params: {currentPage, rowCount, searchText}}));
  }
});

export default connect(
  mapStateToProps, mapDispatchToProps
)
