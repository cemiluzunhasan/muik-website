
import { withRouter } from 'next/router';

const Committies = ({ router }) => {
  
  const goTo = (url) => {  
    router.push(url);
  };

  return (
    <div className="Committies page">
      <div className="CommitteeItem d-iflex j-center a-center fd-column" onClick={() => goTo('')}>
        <h1 className="text-bold text-white">SPOR İLETİŞİMİ</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
      <div className="CommitteeItem d-iflex j-center a-center fd-column">
        <h1 className="text-bold text-white">SANAT İLETİŞİMİ</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
      <div className="CommitteeItem d-iflex j-center a-center fd-column">
        <h1 className="text-bold text-white">KÜLTÜR İLETİŞİMİ</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
      <div className="CommitteeItem d-iflex j-center a-center fd-column">
        <h1 className="text-bold text-white">İLETİŞİM A.</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
      <div className="CommitteeItem d-iflex j-center a-center fd-column">
        <h1 className="text-bold text-white">MEETUP</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
      {/* <div className="CommitteeItem d-iflex j-center a-center fd-column">
        <h1 className="text-bold text-white">SOSYAL MEDYA</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div> */}
      <div className="CommitteeItem d-iflex j-center a-center fd-column">
        <h1 className="text-bold text-white">SOSYAL SORUMLULUK</h1>
        <p className="text-grey">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default withRouter(Committies);