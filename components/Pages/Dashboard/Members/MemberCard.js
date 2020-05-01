
import { DeleteOutlined } from '@ant-design/icons';

const MemberCard = ({ member, showDeleteModal }) => {
  return (
    <div className="MemberCard bg-white">
      <img className="MemberImage" src={member.image} />
      <h1 className="MemberName text-bold">{member.name}</h1>
      <p className="MemberRole">{member.role}</p>
      <DeleteOutlined className="DeleteIcon" onClick={() => showDeleteModal(member)} />
    </div>
  )
};

export default MemberCard;