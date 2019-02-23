'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('login')
    // ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
