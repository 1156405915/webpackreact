import Util from '../utils/util.jsx'
const _util = new Util()

class User{
    Login(loginInfo){
        return _util.request({
            type:'post',
            url:'/manage/user/login.do',
            data:loginInfo
        })
    }

    Logout(){
        return _util.request({
            type:'post',
            url:'/user/logout.do'
        })
    }

    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        if(typeof username !=='string' || username.length==0 ){
            return {
                status:false,
                msg:'用户名不能为空'
            }
        }
        if(typeof password !=='string' || password.length==0 ){
            return {
                status:false,
                msg:'密码不能为空'
            }
        }
        return {
            status:true,
            msg:'登陆成功'
        }
    }
}
export default User