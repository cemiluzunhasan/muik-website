import { useState } from 'react';
import dynamic from 'next/dynamic'
import _ from 'lodash';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import { Quill, categories } from '../../../plugins/constants';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';


const AddArticle = () => {
  const [post, setPost] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
    body: '',
  });

  const onChange = e => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
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
    database.push(post);
    setPost({
      title: '',
      body: ''
    });
  }


  return (
    <div className="AddArticle bg-white full-height section">
      <h1 className="text-bold">Makale Ekle</h1>
      <Row className="form-item">
        <Col span={6}>
          <Input placeholder="Başlık" />
        </Col>
      </Row>
      <Row className="form-item">
        <Col span={6}>
          <Input.TextArea placeholder="Kısa Açıklama" rows={6} />
        </Col>
      </Row>
      <Row className="form-item">
        <Col span={6}>
          <Select placeholder="Kategori" className="full-width">
            { categories.map(category => <Select.Option value={category.value} >{category.name}</Select.Option>)}
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
          <Button type="primary">Makaleyi Ekle</Button>
        </Col>
      </Row>
    </div>
  )
}

export default AddArticle;
