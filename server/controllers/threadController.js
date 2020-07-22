exports.getThread = (req, res, next) => {
  // const id = req.params.id;

  res.json([
    {
      id: 1,
      createdAt: new Date('1/7/2020'),
      author: { id: 1, name: 'Jay', avatarUrl: 'http://picsum.photos/40' },
      body: 'This is a really short message'
    },
    {
      id: 2,
      createdAt: new Date('1/8/2020'),
      author: { id: 2, name: 'Morgan', avatarUrl: 'http://picsum.photos/40' },
      body: 'This is a really short reply'
    }
  ]);
};
