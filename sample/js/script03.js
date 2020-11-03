$(function(){
    let hako = 0;

    
    $("#button02").on("click",function(){
        for(let i=0; i < 10; i++){
            hako = hako +i;
        }
        $("#content").text(hako);

    })
    $("#button3").on("click",function(){
        setInterval(function(){
            hako = hako + 1;
            $("#content").text(hako);
        },1000)
    })

    $("#button04").on("click",function(){
        hako = 0;
        $("#content").text(hako);
    })

  
})