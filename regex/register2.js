$(function(){
    $("#join").validate({
        //규칙 정의
    rules :{
        userid :{ //영문,숫자조합으로 6~12자리
            required : true,
            validId:true,//임의로 정한 규칙
            rangelength:[6,12]
        },
        userpw:{//숫자와 영문자,특수문자의 조합으로 8~15자리 사용
            required : true,
            validPwd : true
        },
        confirmpwd:{
            required : true,
            validPwd : true,
            equalTo : "#userpw" //userpw와 같은지 검증
        },
        gender :{
            required : true
        },
        email :{
            required : true,
            email:true //메소드추가
        },
        mobile :{
            required : true,
            mobile :true//메소드추가
        },
        hobby:{
            required : true
        }
    },
    //규칙에 대한 메세지 정의
    messages:{
        userid :{
            required :"아이디는 필수 속성입니다."
        }, 
        userpw :{
            required :"비밀번호는 필수 속성입니다."
        }, 
        confirmpwd:{
            required : "비밀번호는 필수 속성입니다.",
            equalTo : "이전 비밀번호와 다릅니다." 
        },
        gender :{
            required : "성별을 선택해 주세요"
        },
        email :{
            required : "이메일은 필수 속성입니다."
        },
        mobile :{
            required: "핸드폰 번호는 필수 속성입니다."
        },
        hobby:{
            required : "취미를 선택해 주세요"
        }
    }
});
})
//사용자 검증 메소드 추가
$.validator.addMethod("validId",function(value){
    let idcheck = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    return idcheck.test(value);  //true or false return
},"id를 영대소문자, 숫자의 조합으로 6~12자리로 만들어주세요");
$.validator.addMethod("validPwd",function(value){
    let pwcheck = /(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^*])[A-Za-z\d!@#$%^*]{8,15}$/;
    return pwcheck.test(value);
},"비밀번호를 확인해 주세요");
$.validator.addMethod("email",function(value){
    let emailcheck = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
    ;return emailcheck.test(value);
},"이메일 형식을 확인해 주세요");
$.validator.addMethod("mobile",function(value){
    let mobilecheck = /^\d{2,3}\d{3,4}\d{3,4}$/;
    ;return mobilecheck.test(value);
},"휴대폰 번호 형식을 확인해 주세요");
