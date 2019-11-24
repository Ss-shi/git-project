
// var baseUrl='http://localhost:8000/'
var user = {
    login: function (myname, mypassword, callback) {
        $.post(APIURLS.user_login, {
            user_name: myname,
            password: mypassword
        }, function (res) {
            // console.log(res);
            // if (res.code === 200) {
            //     // alert('登录成功')
            //     location.href = './index.html'
            // } else {
            //     alert(res.msg)
            // }
            callback(res)
        })
    },
    logout: function (callback) {
        $.post(APIURLS.user_logout, function (res) {
            // console.log(res);
            // if(res.code === 200) {
            //     location.href = "./login.html"
            // }
            callback(res)
        })
    },
    getInfo: function(callback){
        $.get(APIURLS.user_getInfo,function(res){
            callback(res)
        })
    }
}

