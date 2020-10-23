$(function(){
 
    let txt1 = "おはようございます！";
    let txt2 = "おげんきですか？";
    let num1 = 20;
    let num2 = 32;

    function seyhello(){
        $("#content").text("こんにちは！");
    }
    　　
    function saySomething(txt){
        $("#content").text(txt);
    }

    function samTwo(t1,t2){
        $("#content").text(t1 + t2);
    }

    $("#button01").on("click",function(){
      seyhello();
    })

    $("#button02").on("click",function(){
      saySomething(txt1)
    })
    
    $("#button03").on("click",function(){
      samTwo(txt1,txt2);
    })
    
    $("#button04").on("click",function(){
      $("#content").text(num1 + num2);
    })
    
    // + - * /
    
    $("#button05").on("click",function(){
      num1 = num1 + 10;
      //$("#content").text(num1);
    
      $("#ball").css("margin-left",num1+'px')
    })
})