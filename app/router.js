'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);


    //测试egg mysql
        //CRUD

    router.get('/test/users/update', controller.users.testUsersUpdate);

    router.get('/test/users/del', controller.users.testUsersDel);

    router.get('/test/users/insert', controller.users.testUsersInsert);
//获取所有用户信息 分页
    router.get('/test/users/tabs', controller.users.testUsersInfoPage);
        //获取单个用户信息
    router.get('/test/users/:user_id', controller.users.testUserInfo);
    //获取所有用户信息
    router.get('/test/users', controller.users.testUsersInfo);



    router.get('/login', controller.users.loginPage);
    router.post('/api/v2/login', controller.users.login);
};
