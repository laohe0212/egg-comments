/**
 * Created by Administrator on 2019/2/23 0023.
 */

'use strict';

const Service = require('egg').Service;
class UserService extends Service {
    async testLogin(user_id){
        console.log("进入service");
        const {ctx,app} = this;
        console.log(user_id);
        let username = "lala";
        let result = await app.mysql.query('select * from egg_users where user_id = ? and user_name = ?', [user_id,username]);
        console.log("result:");
        console.log(result);
        return result;
    }

    //测试数据库删除功能
    async testUsersDel(){
        console.log("进入service");
        const {ctx,app} = this;

        let result = await app.mysql.delete('egg_users',{
            user_id:1
        });
        console.log("插入成功？");
        console.log(result);
        return result;
    }

    //测试数据库更改功能
    async testUsersUpdate(){
        console.log("进入service");
        const {ctx,app} = this;

        let row = {
            user_name:'dongdong',
            user_pwd:'dd'
        }
        let options={
            where:{
                user_id:1
            }
        }
        let result = await app.mysql.update('egg_users',row,options);
        console.log("插入成功？");
        console.log(result);
        return result;
    }

    //测试数据库插入功能
    async testUsersInsert(user_name,user_pwd){
        console.log("进入service");
        const {ctx,app} = this;
        console.log(user_name);
        console.log(user_pwd);

        let result = await app.mysql.insert('egg_users',{user_name,user_pwd,register_time:'2019-02-23 16:19:59'});
        console.log("插入成功？");
        console.log(result);
        return result;
    }
    //测试数据库read功能
    async testUserInfo(user_id){
        const {ctx,app} = this;

        let result = await app.mysql.get('egg_users',{user_id:user_id}); //get获取单个
        console.log("获取成功？");
        console.log(result);
        return result;
    }
    //测试数据库read功能
    async testUsersInfo(user_id){
        const {ctx,app} = this;

        let result = await app.mysql.select('egg_users');  //select获取所有
        console.log("获取成功？");
        console.log(result);
        return result;
    }
    //测试数据库read功能
    async testUsersInfoPage(){
        const {ctx,app} = this;
        // let result = await app.mysql.select('egg_users');  //select获取所有
        // console.log("获取成功？");
        // console.log(result);
        let result = await app.mysql.select('egg_users',{ //搜索post表
            where:{type:'1'},     //where条件
            columns:['user_id','user_name','user_pwd'], //要查询的字段
            orders:[['register_time','desc'],['icon','asc']],
            limit:2, //返回数据量
            offset:2, //数据偏移量

        });
        console.log("获取成功？00");
        console.log(result);
        return result;
    }
}

module.exports = UserService;