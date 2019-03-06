import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import {
  Table,
  Divider,
  Tag,
  List,
  Card,
  Row,
  Col,
  Radio,
  Input,
  Progress,
  Button,
  Icon,
  Dropdown,
  Menu,
  Avatar,
  Modal,
  Form,
  DatePicker,
  Select,
} from 'antd';


import Firebase from './Firebase';

const FormItem = Form.Item;

class BasicList extends PureComponent {
  state = {
    data: [],
    visible: false,
    done: false,
    loading: true,
  };
  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 13 },
  };

  componentDidMount = () => {
    this.props.firebase.companies().on('value', snapshot => {
      this.setState({
        data: snapshot.val(),
        loading: false,
      });
    });
  }
  

  handleComplete = (event) => {
  };

  showModal = () => {
    console.log('click show modal action');
    this.handleComplete('somthing');
    this.setState({
      visible: true,
      current: undefined,
    });
  };

  showEditModal = item => {
    this.setState({
      visible: true,
      current: item,
    });
  };

  handleDone = () => {
    setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      done: false,
      visible: false,
    });
  };

  handleCancel = () => {
    setTimeout(() => this.addBtn.blur(), 0);
    this.setState({
      visible: false,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    const { current } = this.state;
    const id = current ? current.id : '';

    setTimeout(() => this.addBtn.blur(), 0);
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      this.setState({
        done: true,
      });
      dispatch({
        type: 'list/submit',
        payload: { id, ...fieldsValue },
      });
    });
  };

  deleteItem = id => {
    const { dispatch } = this.props;
    dispatch({
      type: 'list/submit',
      payload: { id },
    });
  };

  selectCompany = () => {
    
  }

  render() {
    const { data, visible, done, current = {} } = this.state;
    const getModalContent = () => {
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Company Name" {...this.formLayout}>
            <Input placeholder="please enter a company name" />
          </FormItem>
          <FormItem label="Company Description" {...this.formLayout}>
            <Input placeholder="please enter a company description" />
          </FormItem>
          <FormItem label="Company Address" {...this.formLayout}>
            <Input placeholder="please enter a company address" />
          </FormItem>
          <FormItem label="Company Tags" {...this.formLayout}>
            <Input placeholder="please enter a company tags" />
          </FormItem>
          
        </Form>
      );
    };

    const columns = [{
      title: 'Company Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return <Tag color={color} key={tag}>{tag.toUpperCase()}</Tag>;
          })}
        </span>
      ),
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Edit</a>
          <Divider type="vertical" />
          <a href="javascript:;">Delete</a>
        </span>
      ),
    }];
    
    return (
      <div style={{margin: '24px'}}>
        <Button
          type="dashed"
          style={{ width: '100%', marginBottom: 15, marginTop: 20 }}
          icon="plus"
          onClick={this.showModal}
          ref={component => {
            this.addBtn = findDOMNode(component);
          }}
        >
          Add a new company
        </Button>
        <Table columns={columns} dataSource={data} onRowClick={this.selectCompany()} />
        <Modal
          title={done ? null : `${current.id ? 'Edit' : 'Add'}`}
          className="standardListForm"
          width={640}
          bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
          destroyOnClose
          onCancel={this.handleCancel}
          visible={visible}
        >
          {getModalContent()}
        </Modal>
      </div>
    );
  }
}

export default BasicList;
