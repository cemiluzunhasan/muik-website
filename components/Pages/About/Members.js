import { MEMBERS } from '../../../data/about';

const Members = () => {
  return (
    <div className="Members">
      <h1 className="text-3xl text-center text-bold">Üyelerimiz</h1>
      <div className="MembersContainer">
        { MEMBERS.map(member => (
          <div key={member.id} className="Member d-iflex fd-column bg-white">
            <img src={member.photo} className="MemberImage" />
            <h1 className="MemberName text-center text-bold">{member.name}</h1>
            <h2 className="MemberRole text-center">{member.role}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;