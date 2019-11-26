//Video reference: https://www.youtube.com/watch?v=5nL7X1UMWsc by LearnCode.academy

//
//Wait document load and run when it's ready.
//
$(document).ready(() => {
    $(function () {
        //
        //Variables
        //
        var $orders = $("#orders");
        var $name = $("#name");
        var $job = $("#job");
        //
        //GET Method
        // 
        $.ajax({
            type: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            success: function (response) {
                $.each(response.data, function (index,orders) {                 
                    $orders.append('<li>Name: '+orders.first_name + ' ' + orders.last_name+'</li>');
                });
            },
            error: function(){
                alert("Error while get a person!!");
            }
        });

        //
        //Adding a event click to button
        //
        $("#addButton").on("click", function(){
            var person = {
                name:$name.val(),
                job:$job.val()
            }

            //
            //POST Method
            //
            $.ajax({
                type: 'POST',
                url:'https://reqres.in/api/users',
                data: person,
                success: function(){
                    alert("Person created!!");                    
                },
                error:function(){
                    alert("Error while create a person!!")
                }
            });

        });
    });
})

