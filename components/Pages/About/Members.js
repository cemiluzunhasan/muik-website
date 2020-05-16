import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { MEMBERS } from '../../../data/about';
import { global } from '../../../store/actions';

const Members = ({ dispatch, members }) => {
  useEffect(() => {
    dispatch(global.getData({ url: '/members', key: 'members' }));
  }, []);

  return (
    <div className="Members">
      <div className="full-content">
      <h1 className="section-header text-center text-white text-bold">Üyelerimiz</h1>
        <div className="d-flex j-center">
          {members.data && <div className="MemberCard d-flex fd-column a-center">
            <img src={members.data[0].image} className="Avatar" />
            <h1 className="MemberName text-center text-white">{members.data[0].name}</h1>
            <h3 className="MemberRole text-center text-white">{members.data[0].role}</h3>
          </div>}
        </div>
        <div className="text-center">
          { members.data && _.drop(members.data).map(member => (
            <div key={member.id} className="MemberCard d-iflex fd-column bg-white">
              <img src={member.image} className="Avatar" />
              <h1 className="MemberName text-center text-white">{member.name}</h1>
              <h3 className="MemberRole text-center text-white">{member.role}</h3>
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

const mapStateToProps = (state) => ({ members: state.global.members });
export default connect(mapStateToProps)(Members);
