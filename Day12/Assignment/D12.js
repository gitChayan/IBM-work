let form=document.getElementById("userForm");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phoneNO=document.getElementById("phoneNO").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let obj={
        name,email,phoneNO,password,confirmPassword
    }
    if(obj.password!==confirmPassword){
        return alert("Password not match");
    }

       
    // console.log(name);
    let tr =document.createElement("tr")
    td1=document.createElement("td")
    td1.innerText= obj.name;

    td2=document.createElement("td")
    td2.innerText= obj.email;

    td3=document.createElement("td")
    td3.innerText= obj.phoneNO;

    td4=document.createElement("td")
    td4.innerText= obj.password;

    td5=document.createElement("td")
    td5.innerText= obj.confirmPassword;

    tr.append(td1,td2,td3,td4,td5);

    document.getElementById("tbody").append(tr);

    



});