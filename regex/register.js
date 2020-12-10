//register.html 유효성 검증
//userid :영, 대소문자 허용, 숫자허용, 6~12자리 가능
//password: 영, 대소문자 허용, 숫자허용, 특수문자(!@#$%^*) 허용, 8~15 자리 가능
//confirmpasswd: 위의 규칙과 동일하고 이전 비밀번호와 일치하는지 확인
//gender : 무조건 하나 선택
//email: 이메일 형식에 맞는지 확인
//mobile :- 없는 형태로 01012345678 총 11자리
//hobby : 최소 하나 선택

//패스워드와 패스워드재확인은 유효성 검증이 동일한 조건이므로 checkPass메소드를 하나 따로 만듬
function checkPass(password){
    let pwcheck = /(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^*])[A-Za-z\d!@#$%^*]{8,15}$/;
    if(!pwcheck.test(password)){
        alert("비밀번호를 확인해 주세요");
        return false; //조건대로 안만든 경우
    }
    return true; //조건대로 만든 경우
}
 $(function(){
   $("#userid").change(function(){
    let idcheck = /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    //let userid = $("#userid").val();
    if(!idcheck.test($("#userid").val())){
    alert("id를 영대소문자, 숫자의 조합으로 6~12자리로 만들어주세요");
    $("#userid").select();
    return false;
}
})
    $("#userpw").change(function(){
     let userpw = $("#userpw").val();
    if(!checkPass(userpw)){
        $("#userpw").select();
        return false;
    }
    })
    $("#confirmpwd").change(function(){
        let confirmpwd =$("#confirmpwd").val();
        if(!checkPass(confirmpwd)){
            $("#confirmpwd").select();
            return false;
        }//추가적으로 이전 비밀번호와 같은값인지의 조건걸기
        if( $("#userpw").val() !== $("#confirmpwd").val()){
            alert("이전 비밀번호와 다릅니다");
            $("#confirmpwd").select();
            return false;
        }
    })//confirmpwd
    $(":radio[name='gender']").focusout(function(){
        if(!$(this).is(":checked")){
            alert("성별을 확인해 주세요"); // 아무것도 입력하지 않을때 경고창
            $("#gender_m").prop("checked",true); // 경고창 띄운후 강제로 남자 선택하게 하고 다음으로 넘어감
            return false; 
        }
    })//gender
    $("#email").change(function(){
        let emailcheck = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
;
        if(!emailcheck.test($("#email").val())){
            alert("이메일 형식을 확인해 주세요");
            $("#email").select();
            return false;
        }
    })//email
    $("#mobile").change(function(){
        let mobliecheck = /^\d{2,3}\d{3,4}\d{3,4}$/;

        if(!mobliecheck.test($("#mobile").val())){
            alert("핸드폰 번호를 확인해 주세요");
            $("#mobile").select();
            return false;
        }//mobile
    })
    $("#join").submit(function(e){
        e.preventDefault(); //submit 막기
        if(!$("input[name='hobby']").is(":checked")){
            alert("취미는 한 개 이상 선택해 주세요");
            return false;
        }
    })
    
 })


