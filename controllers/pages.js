'use strict';

const service = require('../services/sections');

module.exports = {

  index: async (ctx) => {
    ctx.send(await service.findAll());
  },

  body: async (ctx) => {
    ctx.send('fwewe');
  }
};
