import { withRouter } from 'next/router';
import { Menu } from 'antd';
import { UserOutlined, UserAddOutlined, UnorderedListOutlined, FormOutlined, PlusCircleOutlined, CalendarOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const MuikSider = ({ router }) => {
  
  const goTo = (route) => {
    router.push(route);
  }

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      className="page"
      style={{ height: '100%', borderRight: 0 }}
    >
      <SubMenu
        key="Blog"
        title={
          <span>
            <FormOutlined />
            Blog
          </span>
        }
      >
        <Menu.Item key="add-blog" onClick={() => goTo('/dashboard/articles/add')}>
          <PlusCircleOutlined />
          Yazı Ekle
        </Menu.Item>
        <Menu.Item key="list-blog" onClick={() => goTo('/dashboard/articles/list')}>
          <UnorderedListOutlined />
          Yazıları Listele
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="members"
        title={
          <span>
            <UserOutlined />
            Üyeler
          </span>
        }
      >
        <Menu.Item key="add-member" onClick={() => goTo('/dashboard/members/add')}>
          <UserAddOutlined /> 
          Üye Ekle
        </Menu.Item>
        <Menu.Item key="list-members" onClick={() => goTo('/dashboard/members/list')}>
          <UnorderedListOutlined />
          Üyeleri Listele
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="events"
        title={
          <span>
            <CalendarOutlined />
            Etkinlikler
          </span>
        }
      >
        <Menu.Item key="add-event" onClick={() => goTo('/dashboard/events/add')}>
          <PlusCircleOutlined />
          Etkinlik Ekle
        </Menu.Item>
        <Menu.Item key="list-events" onClick={() => goTo('/dashboard/events/list')}>
          <UnorderedListOutlined />
          Listele
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default withRouter(MuikSider);
