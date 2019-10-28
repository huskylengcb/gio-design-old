import * as React from 'react';
import './playground.less';
import { JsonEditor } from 'jsoneditor-react';
import ace from 'brace';
import 'brace/mode/json';
import 'brace/theme/github';
// import Tag from './components/tag';
// import Avatar from './components/avatar';
// import Checkbox from './components/checkbox';
import Button from './components/button';
// import Icon from './components/icon';
// import DatePicker from './components/date-picker';
// import Greeting from './components/greeting';
// import Input from './components/input';
// import ErrMsg from './components/err-msg';
// import List from './components/list';
// import Message from './components/message';
// import Option, {OptionGroup, CheckOption} from './components/option';
// import Modal from './components/modal';
// import List from './components/oldlist';
// import Popconfirm from './components/popconfirm';
// import Popover from './components/popover';
// import Progress from './components/progress';
// import Radio from './components/radio';
// import Select from './components/select';
// import Switch from './components/switch';
// import Textarea from './components/textarea';
// import TimePicker from './components/time-picker';
// import Tooltip from './components/tooltip';
// import Menu from './components/menu';
// const { SubMenu, MenuItemGroup, Item } = Menu;

const defaultProps = {
  title: 'aaaaa'
}
class App extends React.Component {

  constructor(props) {
    super(props);

    this._handleChange = (v) => {
      console.info('handleChange', v);
      try {
        this.setState({ ...v });
      } catch (e) {
        console.error(e)
      }
    }

    this._setRef = (node) => {
      this.JsonEditorElement = node ? node.jsonEditor : {};
    }

    this.state = { ...defaultProps }
  }

  greeting() {
    Greeting.info('aaa');
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        {/* <div className='props'>props:</div> */}
        {/* <div className='editor'>
          <JsonEditor
            handleChange={this._handleChange}
            mode='tree'
            ace={ace}
            value={defaultProps}
            theme='ace/theme/github'
            onChange={this._handleChange}
            ref={this._setRef}
          />
        </div> */}
        <div className='playground'>
          <div>
            <h1>Button</h1>
            <Button>Default</Button>
            <Button disabled>Default Disabled</Button>
            <Button size='large'>Large</Button>
            <br />
            <Button type='primary'>Primary</Button>
            <Button type='primary' disabled>Primary Disabled</Button>
            <Button type='primary' size='large'>Primary Large</Button>
          </div>
        </div>
        {/* <div>
          <Menu
            onClick={() => {}}
            style={{ width: 240 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
          >
            <SubMenu key='sub2' title={<span>Navigation Two</span>}>
              <Menu.Item key='5'>Option 5</Menu.Item>
              <Menu.Item key='6'>Option 6</Menu.Item>
              <SubMenu key='sub3' title='Submenu'>
                <Menu.Item key='7'>Option 7</Menu.Item>
                <Menu.Item key='8'>Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key='sub4' title={<span>Navigation Three</span>}>
              <Menu.Item key='9'>Option 9</Menu.Item>
              <Menu.Item key='10'>Option 10</Menu.Item>
              <Menu.Item key='11'>Option 11</Menu.Item>
              <Menu.Item key='12'>Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </div> */}
      </React.Fragment>

    );
  }
}

export default App;
