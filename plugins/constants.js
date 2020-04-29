
export const categories = [
  {
    id: 1,
    value: 'sports',
    name: 'Spor'
  },
  {
    id: 2,
    value: 'arts',
    name: 'Sanat'
  },
  {
    id: 3,
    value: 'culture',
    name: 'Kültür'
  },
  {
    id: 4,
    value: 'communication',
    name: 'İletişim'
  },
  {
    id: 5,
    value: 'meetup',
    name: 'Meetup'
  },
  {
    id: 6,
    value: 'social',
    name: 'Sosyal Sorumluluk'
  },
];

export const Quill = {
  formats: [
    'header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet',
    'link', 'image', 'video'
  ],
  modules: {
    toolbar: [
      [{ 'header': '1'}, { header: '2'}, { font: []},
      [{ size: [] }]],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered'}, { list: 'bullet'}],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
    ]
  },
}