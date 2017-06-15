const menus = [
  {
    key: 'sub1',
    name: 'Navigation One',
    icon: 'mail',
  },
  {
    key: 'sub2',
    name: 'Navigation Two',
    icon: 'appstore',
    child: [
      {
        key: '5',
        name: 'Option 5',
      },
      {
        key: '6',
        name: 'Option 6',
      },
      {
        key: 'sub3',
        name: 'Submenu',
        child: [
          {
            key: '7',
            name: 'Option 7',
          },
          {
            key: '8',
            name: 'Option 8',
          },
        ],
      },
    ],
  },
  {
    key: 'sub4',
    name: 'Navigation Three',
    icon: 'setting',
    child: [
      {
        key: '9',
        name: 'Option 9',
      },
      {
        key: '10',
        name: 'Option 10',
      },
      {
        key: '11',
        name: 'Option 11',
      },
      {
        key: '12',
        name: 'Option 12',
      },
    ],
  },
];

export default menus;