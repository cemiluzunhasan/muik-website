import { MEMBERS } from '../../../data/about';

const Members = () => {
  
  const goTo = (link) => {
    window.location.replace(link);
  };
  
  return (
    <div className="Members">
      <div className="full-content">
      <h1 className="section-header text-center text-pink text-bold">Üyelerimiz</h1>
        <div className="d-flex j-center">
          <div className="MemberCard d-flex fd-column a-center">
            <img src={MEMBERS.president.photo} className="Avatar" />
            <h1 className="MemberName text-center">{MEMBERS.president.name}</h1>
            <h3 className="MemberRole text-center">{MEMBERS.president.role}</h3>
          </div>
        </div>
        <div className="text-center">
          { MEMBERS.others.map(member => (
            <div key={member.id} className="MemberCard d-iflex fd-column bg-white">
              <img src={member.photo} className="Avatar" />
              <h1 className="MemberName text-center">{member.name}</h1>
              <h3 className="MemberRole text-center">{member.role}</h3>
              {/* <div className="MemberAccounts">
                { member.accounts.map(account => {
                  <img onClick={() => goTo(account.href)} src={`/static/icons/social/${account.id}.svg`} className="MemberAccount" />
                })}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
