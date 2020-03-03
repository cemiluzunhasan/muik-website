
import { Drawer } from 'antd';

const HamburgerMenu = (props) => {

  const onClose = () => {
    props.onClose();
  };

  return (
    <div className="HamburgerMenu" onClose={onClose}>
      <Drawer
        title="Marmara Üniversitesi"
        placement="right"
        onClose={onClose}
        visible={props.isVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  )
}

export default HamburgerMenu;
