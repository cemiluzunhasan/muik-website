import { Row, Col } from 'antd';

const About = () => {
  return (
    <div className="About">
      <div className="AboutHeader">
        <div className="full-content d-flex fd-column j-center">
          <h1 className="text-white text-header text-bold">Hakkımızda</h1>
          <p className="text-white">Biz Marmara İletişim Kulübü hakkında bilmeniz gereken her şey :)</p>
        </div>
      </div>
      <div className="full-content">
        <Row align="center" className="margin-t-xxl">
          <h3 className="text-pink text-bold">Biz Kimiz?</h3>
          <h2 className="section-header">Lorem Ipsum Dolor Sit Amet</h2>
          <Row gutter={32} className="margin-t-xxl">
            <Col span={8}>
              <img className="full-width" src="/static/img/about/who-we-are.jpeg" />
            </Col>
            <Col span={16}>
              <p className="section-info">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam   eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </Col>
          </Row>
        </Row>
        <Row justify="end" className="margin-t-4xl">
          <h3 className="text-pink text-bold text-right">Vizyon</h3>
          <h2 className="section-header text-right">Lorem Ipsum Dolor Sit Amet</h2>
          <Row gutter={32} className="margin-t-xxl">
            <Col span={16}>
              <p className="section-info">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam   eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </Col>
            <Col span={8}>
              <img className="full-width" src="/static/img/about/who-we-are.jpeg" />
            </Col>
          </Row>
        </Row>
        <Row justify="end" className="margin-t-4xl">
          <h3 className="text-pink text-bold">Misyon</h3>
          <h2 className="section-header">Lorem Ipsum Dolor Sit Amet</h2>
          <Row gutter={32} className="margin-t-xxl">
            <Col span={8}>
              <img className="full-width" src="/static/img/about/who-we-are.jpeg" />
            </Col>
            <Col span={16}>
              <p className="section-info">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam   eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </p>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default About;
