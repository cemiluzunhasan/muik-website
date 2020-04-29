import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Input, Upload, Button } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import firebase from '../../../plugins/firebase';
import { global } from '../../../store/actions';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const AddMember = ({ dispatch }) => {
  const [state, setState] = useState({
    loading: false,
    imageUrl: '',
  });

  const [president, setPresident] = useState({
    id: '',
    name: '',
    image: null,
  });

  const [vicePresident, setVicePresident] = useState({
    id: '',
    name: '',
    image: null,
  });

  const [member, setMember] = useState({
    id: '',
    name: '',
    role: '',
    image: null,
  });

  useEffect(() => {
    const presidentId = uuidv4();
    const vicePresidentId = uuidv4();

    setPresident({ ...president, id: presidentId });
    setVicePresident({ ...vicePresident, id: vicePresidentId });
  }, []);

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setState({
        ...state,
        loading: true
      })
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  const handleChangePresident = (e) => {
    setPresident({ ...president, name: e.target.value });
  };

  const uploadPresidentImage = async ({ onError, onSuccess, file }) => {
    const storage = firebase.storage().ref('/members');
    const imageName = president.id;
    const imgFile = storage.child(`${imageName}.png`);
    
    await (await imgFile.put(file)).ref.getDownloadURL().then(url => {
      setPresident({ ...president, image: url });
    }).catch(err => {
      console.log("Hata var", err);
    });
      
  }

  const submitPresident = () => {
    dispatch(global.addData({ url: '/members', data: president }, 'president'));
  }

  const uploadButton = (
    <div>
      {state.loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Avatar Ekle</div>
    </div>
  );

  return (
    <div className="AddArticle bg-white full-height section">
      <Row>
        <Col span={4}>
          <h3 className="text-bold">Başkan</h3>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            customRequest={uploadPresidentImage}
            onChange={handleChange}
          >
            {president.image ? <img src={president.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          <Input placeholder="Adı Soyadı" onChange={(e) => handleChangePresident(e)} />
          <Button type="primary" onClick={submitPresident}>Güncelle</Button>
        </Col>
        {/* <Col span={4} offset={1}>
          <h3 className="text-bold">Başkan Yardımcısı</h3>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          <Input placeholder="Adı Soyadı" />
          <Button type="primary">Güncelle</Button>
        </Col>
        <Col span={4} offset={1}>
          <h3 className="text-bold">Üye Ekle</h3>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          <Input placeholder="Adı Soyadı" />
          <Input placeholder="Görevi" />
          <Button type="primary">Üyeyi Ekle</Button>
        </Col> */}
      </Row>
    </div> 
  );
}

export default connect(null)(AddMember);
