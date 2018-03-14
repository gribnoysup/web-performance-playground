module.exports = [
  {
    name: 'update',
    type: null,
  },
  {
    name: 'fetch',
    type: 'multiselect',
    message: 'Which applications do you want to fetch?',
    excludeCurrent: true,
  },
  {
    name: 'clear',
    type: 'multiselect',
    message: 'Which applications do you want to clear?',
    excludeCurrent: false,
  },
  {
    name: 'build',
    type: 'multiselect',
    message: 'Which applications do you want to build?',
    excludeCurrent: false,
  },
  {
    name: 'start',
    type: 'select',
    message: 'Which applications do you want to start?',
    excludeCurrent: false,
  },
  {
    name: 'measure',
    type: 'multiselect',
    message: 'Which applications do you want to measure?',
    excludeCurrent: false,
  },
  // {
  //   name: 'compare',
  //   type: 'multiselect',
  // },
  // {
  //   name: 'metrics',
  //   type: 'select',
  // },
];
