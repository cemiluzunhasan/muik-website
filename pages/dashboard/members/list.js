import { useEffect } from 'react';
import { connect } from 'react-redux';
import { global } from '../../../store/actions';

const ListMembers = ({ dispatch, members }) => {
  useEffect(() => {
    dispatch(global.getData({ key: 'members', url: '/members'}));
  }, []);

  return (
    <div className="ListMembers page">
      { console.log(members) }
    </div> 
  );
}

const mapStateToProps = ({ members }) => ({ members });
export default connect(mapStateToProps)(ListMembers);
