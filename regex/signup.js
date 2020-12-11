$(function(){
    $("#signupForm").validate({
        //검증할 규칙을 rules에 명시 - 각 요소에 이름을 사용
         rules:{
             username:{ //필수입력, 2~4자리
                required : true,
                minlength:2,
                maxlength:4
             },
             password:{ //필수입력, 8~15자리
                required : true,
                rangelength :[8,15] //minlegth , maxlength 를 한줄로 표현
                // minlength : 8,
                // maxlength : 15
             },
             confirm_password:{//필수입력, 8~15자리, password와 값이 동일한지
                required : true,
                rangelength :[8,15],
                equalTo : "#password"
             },
             email:{//필수, email형식 검증
                required : true,
                email : true
             },
             policy:{ //필수
                 required : true
             },
             topic :{ //뉴스레터 체크여부와 2개체크가 되어있는지
                required : "#newsletter:checked",
                minlength :2
             }
         }, //rules
         messages:{ //개발자가 원하는 메시지 보여주기
            username:{ //필수입력, 2~4자리
                required : "이름은 필수 요소입니다.",
                minlength: "이름은 최소 2자리여야 합니다.",
                maxlength: "이름은 최대 4자리까지 허용됩니다."
             },
             password:{ //필수입력, 8~15자리
                required : "비밀번호는 필수 요소입니다.",
                rangelength :"비밀번호는 최소 8~15 사이로 입력해야 합니다."
              },
             confirm_password:{//필수입력, 8~15자리, password와 값이 동일한지
                required : "비밀번호는 필수 요소입니다.",
                rangelength :"비밀번호는 최소 8~15 사이로 입력해야 합니다.",
                equalTo : "이전 비밀번호와 다릅니다."
             },
             email:{//필수, email형식 검증
                required : "이메일은 필수 요소입니다.",
                email : "이메일을 확인해 주세요"
             },
             policy:"우리 정책에 동의를 필요로 합니다.",
             
             topic : "관심사를 적어도 2개는 표시해야 합니다."    
         }, //messages
         //에러메시지 위치: 에러가 나면 help-block 클래스를 추가하여 라벨뒤에 오도록 설정
         errElement : "em", 
         errorPlacement : function(error,element){
             error.addClass("help-block");
             if(element.prop("type") =="checkbox"){
                 error.insertAfter(element.next("label"));
             }else{
                 error.insertAfter(element);
             }
         }
    });//signup

    //뉴스레터를 클릭하면 하단에 메일링 리스트 보여주기
        $("#newsletter").click(function(){
            var topics = $("#newsletter_topics");
            if(topics.css("display") === "none"){ // ===는 엄격한 비교 ex)숫자1과 문자1은 ==일때는 같지만 === 일때는 같지않음
                $(topics).css("display","block");
            }else{
                $(topics).css("display","none");
            }
        })

})