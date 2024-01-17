$('#add_user').submit((event)=>{
    alert('Data Inserted Successful');
})

$('#update_user').submit(function(event){
    event.preventDefault();
    var unindexed_array =$(this).serializeArray();
    console.log(unindexed_array);

    var data={};
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data);  

    var request={
        url:`http://localhost:3000/api/users/${data.id}`,
        method :"put",
        data : data,
        contentType:'application/json',
        CORS: true ,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
            },
    }

    $.ajax(request).done(function(response){
        alert("Information updated successfully");
    })
})