import { Spin } from 'antd';

const Loading = ({ text }) => (
  <div className="Loading">
    <Spin tip={text} />
  </div>
);

export default Loading;
