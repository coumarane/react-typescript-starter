export interface IActions {
  label?: string;
  link: string;
  icon: string;
  onclickEvent?: () => void;
}

// export interface IColumnType {
//   type: string;
//   name: string;
// }

// export interface IDatatableColumnDefs {
//   headerTitle: string;
//   dataField: string;
//   isKey?: boolean;
//   actions?: IActions[];
//   columnType?: IColumnType;
// }
