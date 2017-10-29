import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Table,Popconfirm} from 'antd';
import EditableCell from './editableCell .jsx'

class EditableTable extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
        dataSource: [{
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        }, {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        }],
      };

      this.columns = [{
        title: '',
        dataIndex: 'name',
        width: '30%',
        render: (text, record) => (
          <EditableCell
            value={text}
            onChange={this.onCellChange(record.key, 'name').bind(this)}
          />
        ),
      }, {
        title: '',
        dataIndex: 'age',
      }, {
        title: '',
        dataIndex: 'address',
      }];
    }

    render() {
      const { dataSource } = this.state;
      const columns = this.columns;
        return (
          <Table bordered dataSource={dataSource} columns={columns} pagination={false}/>
        );
    }

    componentDidMount() {

    }
  onCellChange (key, dataIndex) {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
}
export default EditableTable
