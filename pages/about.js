import { Row } from 'antd'
import { Members, AboutUs } from '../components/Pages/About'

const About = () => {
  return (
    <div className='About'>
      <div className='AboutHeader'>
        <div className='full-content d-flex fd-column j-center'>
          <h1 className='text-white text-header text-bold'>Hakkımızda</h1>
          <p className='text-white'>
            Biz Marmara İletişim Kulübü hakkında bilmeniz gereken her şey :)
          </p>
        </div>
      </div>
      <Row className="page-section">
        <div className="full-content">
          <AboutUs />
        </div>
      </Row>
      <Row className="bg-black">
        <div className='full-content'>
          <Members />
        </div>
      </Row>
    </div>
  )
}

export default About
