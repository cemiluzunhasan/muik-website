import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import dynamic from 'next/dynamic';
import { global } from '../../../store/actions';
import { Input, Select, Button, Row, Col } from 'antd';
import { Quill, categories } from '../../../plugins/constants';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

//TODO: Article' lar için bir tane giriş resmi ekle
const AddArticle = ({ dispatch }) => {
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
  }

  const onSubmit = e => {
    e.preventDefault();
    dispatch(global.addData({ url: '/posts', data: post }, post.id));
  }


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
          <Button type="primary" onClick={(e) => onSubmit(e)}>Makaleyi Ekle</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect(null)(AddArticle);
