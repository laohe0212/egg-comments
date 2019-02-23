'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
    async testLogin() {
        const {ctx} = this;
        let user_id = ctx.query.user_id;
        console.log(user_id);
        let user_res = await ctx.service.user.testLogin(user_id);
        console.log("user_res");
        console.log(user_res);
        ctx.body = 'sss';
    }

    //测试数据库删除功能
    async testUsersDel() {
        const {ctx} = this;

        let user_res = await ctx.service.user.testUsersDel();
        console.log("user_res");
        console.log(user_res);
        ctx.body = user_res;
    }

    //测试数据库插入功能
    async testUsersInsert() {
        const {ctx} = this;

        let user_name = ctx.query.username;
        let user_pwd = ctx.query.userpwd;

        let user_res = await ctx.service.user.testUsersInsert(user_name, user_pwd);
        console.log("user_res");
        console.log(user_res);
        ctx.body = user_res;
    }


    //测试数据库插入功能
    async testUsersUpdate() {
        const {ctx} = this;

        let row = {
            user_name:'dongdong',
            user_pwd:'dd'
        }
        let options={
            where:{
                user_id:1
            }
        }
        let user_res = await ctx.service.user.testUsersUpdate();
        console.log("user_res");
        console.log(user_res);
        ctx.body = user_res;
    }

    //测试数据库read功能
    async testUserInfo() {
        const {ctx} = this;

        let user_id = ctx.params.user_id;


        let user_res = await ctx.service.user.testUserInfo(user_id);
        console.log("user_res");
        console.log(user_res);
        ctx.body = user_res;
    }

    //测试数据库read功能
    async testUsersInfo() {
        const {ctx} = this;

        let user_res = await ctx.service.user.testUsersInfo();

        ctx.body = user_res;
    }
    //测试数据库read功能
    async testUsersInfoPage() {
        const {ctx} = this;

        let user_res = await ctx.service.user.testUsersInfoPage();

        ctx.body = user_res;
    }

    async loginPage() {
        const {ctx} = this;
        await ctx.render('login')
    }

    async login() {
        const {ctx} = this;
        await ctx.render('login')
    }
}

module.exports = UsersController;
