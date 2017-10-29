import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Table , Input, Icon, Button, Popconfirm} from 'antd';

class EditableCell extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state={
        value: this.props.value,
        editable: false,
      }
    }

    render() {
      const { value, editable } = this.state;
      return (
        <div className="editable-cell">
          {
            editable ?
              <div className="editable-cell-input-wrapper">
                <Input
                  value={value}
                  onChange={this.handleChange.bind(this)}
                  onPressEnter={this.check.bind(this)}
                />
                <Icon
                  type="check"
                  className="editable-cell-icon-check"
                  onClick={this.check.bind(this)}
                />
              </div>
              :
              <div className="editable-cell-text-wrapper">
                {value || ' '}
                <Icon
                  type="edit"
                  className="editable-cell-icon"
                  onClick={this.edit.bind(this)}
                />
              </div>
          }
        </div>
      );
    }
  handleChange(e){
    const value = e.target.value;
    this.setState({ value });
  }
  check(){
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit(){
    this.setState({ editable: true });
  }
}
export default EditableCell
