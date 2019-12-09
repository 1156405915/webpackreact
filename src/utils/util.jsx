class Utils {
    request(params){
        return new Promise((resolve,reject)=>{
            $.ajax({
                type:params.type||'get',
                url:params.url||'',
                dataType:params.dataType||'json',
                data:params.data||null,
                success(res){
                    if(0 == res.status){ //请求成功
                        resolve(res.data,res.msg)
                    }else if(10 == res.status){
                        this.doLogin()
                    }else{
                        reject(res.msg)
                    }
                },
                error(err){
                    reject(err.statusText)
                }
            })
        })
    }

    doLogin(){ //跳转登录
        window.location.href='/login?redirect='+encodeURIComponent(window.location.pathname)
    }
    getUrlParam(name){
        let param = window.location.search.split('?')[1] ||'',
            reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)"),
            result = param.match(reg); 
        return result ? decodeURIComponent(result[2]) : null
    }
    successTips(resMsg){ //成功提示
        alert(resMsg||'操作成功！')
    }
    errorTips(resMsg){ //失败提示
        alert(resMsg||'好像哪里不对了~')
    }
    setStorage(name,data){
        let dataType = typeof data;
        if(dataType === 'object'){ //Json对象
            window.localStorage.setItem(name,JSON.stringify(data))
        }else{ // 其他类型
            window.localStorage.setItem(name,data)
        }
    }
    getStorage(name){
        let data = window.localStorage.getItem(name)
        if(data){
            return JSON.parse(data)
        }else{
            return ''
        }
    }
    removeStorage(name){
        window.localStorage.removeItem(name)
    }
}

export default Utils