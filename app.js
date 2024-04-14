
function getData()
{

    var user_name = document.getElementById('user_name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var city = document.getElementById('city').value;
    var gender = document.getElementById('gender').value;

    document.getElementById("box").style.display = "block";

    document.getElementById("dname").innerText = "User Name is : " + user_name;
    document.getElementById("demail").innerText = "User Email is : " +  email;
    document.getElementById("dage").innerText = "User Age is : " + age;
    document.getElementById("dcity").innerText = "User City is : " + city;
    document.getElementById("dgender").innerText = "User Gender is : " + gender;

    document.getElementById('user_name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('age').value = "";
    document.getElementById('city').value = "";
    document.getElementById('gender').checked = false;

 
    // console.log(user_name + '\n');
    // console.log(email + '\n');
    // console.log(age + '\n');
    // console.log(city + '\n');
    // console.log(gender + '\n');
}