import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Input, Upload, Button, message } from 'antd';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import firebase from '../../../plugins/firebase';
import { global } from '../../../store/actions';

function beforeUpload(file) {
  const isPng = file.type === 'image/png';
  if (!isPng) {
    message.error('Sadece JPG/PNG dosyaları eklenebilir');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Eklenen resim 2MB boyutundan fazla olamaz');
  }
  return isPng && isLt2M;
}

const AddMember = ({ dispatch }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [member, setMember] = useState({
    id: '',
    name: '',
    role: '',
    image: null,
  });

  useEffect(() => {
    const id = uuidv4();
    setMember({ ...member, id });
  }, []);

  const handleImageChange = info => {
    if (info.file.status === 'uploading') {
      setImageLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setImageLoading(false);  
    }
  };

  const handleChange = (key, value) => {
    setMember({ ...member, [key]: value });
  };

  const uploadImage = async ({ onError, onSuccess, file }) => {
    const storage = firebase.storage().ref('/members');
    const imageName = member.id;
    const imgFile = storage.child(`${imageName}.png`);
    
    await (await imgFile.put(file)).ref.getDownloadURL().then(url => {
      setMember({ ...member, image: url });
    }).catch(err => {
      console.log("Hata var", err);
    });
      
  }

  const submit = () => {
    dispatch(global.addData({ url: '/members', data: member }));
  }

  const uploadButton = (
    <div>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Avatar Ekle</div>
    </div>
  );

  return (
    <div className="AddArticle bg-white full-height section">
      <Row>
        <Col span={4}>
          <h3 className="text-bold">Üye Ekle</h3>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            customRequest={uploadImage}
            onChange={handleImageChange}
          >
            {member.image ? <img src={member.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
          <Input placeholder="Adı Soyadı" onChange={(e) => handleChange('name', e.target.value)} />
          <Input placeholder="Görevi" onChange={(e) => handleChange('role', e.target.value)} />
          <Button type="primary" onClick={submit}>Üyeyi Ekle</Button>
        </Col>
      </Row>
    </div> 
  );
}

export default connect(null)(AddMember);
