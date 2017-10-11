var myObj = {}

$('#apiBtn').click(function(){
    alert('test')
})
myObj.getApi = {
    $.ajax({
            type: "GET",
            url: "https://jsonplaceholder.typicode.com/posts/1",
            dataType: "json",
            success: function(data) {
                alert(data)
            },
            error: function(jqXHR) {
                alert("發生錯誤: " + jqXHR.status);
            }
        })
    })
}
