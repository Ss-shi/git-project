

var article = {
    show:function(obj,callback){
        $.get(APIURLS.article_search,{
            page:obj.page,
            type:obj.type,
            state:obj.status,
        },function(res){
            callback(res)
        })
    },
    del:function(id,callback){
        $.get(APIURLS.article_del,{id:id},function(res){
            callback(res)
        })
    },
    publish:function(fd,callback){
        $.ajax({
            url:APIURLS.article_publish,
            type:'post',
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
                callback(res);

            }
        })
    },
    getDetail: function (id, callback) {
        // console.log("article.show的参数", obj)
        $.get(APIURLS.article_search,
            {
                id:id,
            },
            function (res) {
                callback(res)
            }
        )
    },
    edit:function(fd,callback){
        $.ajax({
            url:APIURLS.article_edit,
            type:'post',
            data:fd,
            processData:false,
            contentType:false,
            success:function(res){
                callback(res);
            }
        })
    }
}