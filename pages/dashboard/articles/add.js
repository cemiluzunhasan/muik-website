import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { global } from '../../../store/actions';
import firebase from '../../../plugins/firebase';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { Input, Select, Button, Row, Col, Upload } from 'antd';
import { Quill, categories } from '../../../plugins/constants';

import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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

const AddArticle = ({ dispatch }) => {
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [post, setPost] = useState({
    id: uuidv4(),
    title: '',
    description: '',
    category: '',
    image: null,
    body: '',
  });

  const onChange = (key, value) => {
    setPost({
      ...post,
      [key]: value
    });
  }

  const onBodyChange = e => {
    setPost({
      ...post,
      body: e
    })
  };

  const handleImageChange = info => {
    if (info.file.status === 'uploading') {
      setImageLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      setImageLoading(false);  
    }
  };

  const uploadImage = async ({ onError, onSuccess, file }) => {
    const storage = firebase.storage().ref('/articles');
    const imageName = post.id;
    const imgFile = storage.child(`${imageName}.png`);
    
    await (await imgFile.put(file)).ref.getDownloadURL().then(url => {
      setPost({ ...post, image: url });
    }).catch(err => {
      console.log("Hata var", err);
    });
      
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(global.addData({ url: '/posts', data: post }, post.id)).then(() => {
      console.log("Oldu");
      setLoading(false);
    }).catch(e => {
      setLoading(false);
      console.log("Olmadı")
    });
  }

  const uploadButton = (
    <div>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Yazı Giriş Resmi</div>
    </div>
  );

  return (
    <div className="AddArticle bg-white full-height section">
      <h1 className="text-bold">Makale Ekle</h1>
      <Row className="form-item">
        <Col span={6}>
          <Input placeholder="Başlık" name="title" onChange={e => onChange('title', e.target.value)} />
        </Col>
      </Row>
      <Row className="form-item">
        <Col span={6}>
          <Input.TextArea placeholder="Kısa Açıklama" name="description" rows={6} onChange={e => onChange('description', e.target.value)} />
        </Col>
      </Row>
      <Row className="form-item">
        <Col span={6}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            customRequest={uploadImage}
            onChange={handleImageChange}
          >
            {post.image ? <img src={post.image} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </Col>
      </Row>
      <Row className="form-item">
        <Col span={6}>
          <Select placeholder="Kategori" className="full-width" onChange={value => onChange('category', value)}>
            { categories.map(category => <Select.Option value={category.value}>{category.name}</Select.Option>)}
          </Select>
        </Col>
      </Row>
      <Row className="form-item">
        <ReactQuill
          modules={Quill.modules}
          formats={Quill.formats}
          value={post.body}
          placeholder='Body'
          onChange={e => onBodyChange(e)}
        />
      </Row>
      <Row className="form-item margin-t-3xl" style={{ marginTop: 70 }}>
        <Col span={6}>
          <Button type="primary" onClick={(e) => onSubmit(e)} loading={loading}>Makaleyi Ekle</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect(null)(AddArticle);
