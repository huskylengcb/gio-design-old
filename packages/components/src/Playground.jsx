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
const IconButton = Button.Icon;
// import Icon from './components/icon';
// import DatePicker from './components/date-picker';
// import Greeting from './components/greeting';
import Input from './components/input';
// import ErrMsg from './components/err-msg';
// import List from './components/list';
import Message from './components/message';
// import Option, {OptionGroup, CheckOption} from './components/option';
// import Modal from './components/modal';
// import List from './components/oldlist';
// import Popconfirm from './components/popconfirm';
// import Popover from './components/popover';
// import Progress from './components/progress';
// import Radio from './components/radio';
import Select from './components/select';
// import Switch from './components/switch';
// import Textarea from './components/textarea';
// import TimePicker from './components/time-picker';
// import Tooltip from './components/tooltip';
// import Menu from './components/menu';
// const { SubMenu, MenuItemGroup, Item } = Menu;
import Link from './components/link';
import Pagination from './components/pagination';
import Spin from './components/spin';

const defaultProps = {
  title: 'aaaaa'
}
class App extends React.Component {

  constructor(props) {
    super(props);
    window.msg = Message;

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
          <div>
            <h1>IconButton</h1>
            <IconButton type='filter' />
            <IconButton type='filter' disabled />
            <IconButton type='down' />
          </div>
          <div style={{ width: 300 }}>
            <h1>Input</h1>
            <Input value='Default' />
            <Input value='Default Disabled' disabled />
            <Input value='Default ReadOnly' readOnly />
            <Input value='Inverse' inverse />
            <Input value='Inverse Disabled' disabled inverse />
            <Input value='Default Small' size='small' />
            <Input.Search value='Search' />
            <Input.Search value='Search' inverse />
            <Input.Search value='Search Disabled' disabled />
          </div>
          <div>
            <h1>Select</h1>
            <div>
              <Select value='Select' style={{ width: 100 }}>
                {
                  [...Array(7).keys()].map(i => (
                    <Select.Option key={`select-1-${i}`} value={i}>{i}</Select.Option>
                  ))
                }
              </Select>
            </div>
            <div>
              <Select value='Group Select' style={{ width: 200 }}>
                {
                  [...Array(3).keys()].map(i => (
                    <Select.OptGroup label={'label: ' + i} key={`select-group-${i}`}>
                      {
                        [...Array(3).keys()].map(j => (
                          <Select.Option key={`select-2-${i}-${j}`}>{'item: ' + j}</Select.Option>
                        ))
                      }
                    </Select.OptGroup>
                  ))
                }
              </Select>
            </div>
            <div>
              <Select
                value='Ghost'
                style={{
                  minWidth: 85,
                  maxWidth: 185
                }}
                dropdownStyle={{ width: '200px' }}
                type='ghost'
              >
                {
                  [...Array(7).keys()].map(i => (
                    <Select.Option key={`select-1-${i}`} value={i}>{i}</Select.Option>
                  ))
                }
              </Select>
            </div>
          </div>
          <div>
            <h1>Link</h1>
            <Link>Link</Link>
            <br />
            <Link disabled>Link Disabled</Link>
            <div style={{ width: 300, backgroundColor: '#242E59', padding: 10 }}>
              <Link inverse>Link</Link>
              <br />
              <Link inverse disabled>Link Disabled</Link>
            </div>
          </div>
          <div>
            <h1>Pagination</h1>
            <Pagination defaultCurrent={1} total={100}/>
          </div>
          <div>
            <h1>Spin</h1>
            <Spin />
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
