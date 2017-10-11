var myObj = {}

myObj.getApi = function(){
    $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            dataType: "json",
            success: function(data) {
                console.info(data)
            },
            error: function(jqXHR) {
                alert("發生錯誤: " + jqXHR.status);
            }
    })
}

