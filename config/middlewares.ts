module.exports = [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://cyrano-pamphlet.vercel.app/',
        'http://localhost:3000',
        'http://localhost:1337',
        'http://localhost:1338',
        'http://localhost:1339',
        'http://localhost:1340',
        'http://localhost:1341',
        'http://localhost:1342',
      ],
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];