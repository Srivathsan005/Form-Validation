const nameinput1=document.getElementById("firstname");
const nameinput2=document.getElementById("lastname");
const email=document.getElementById("email");
const password=document.getElementById("password");
const address=document.getElementById("address");
const contact=document.getElementById("contact");
const errornodes=document.getElementsByClassName("error");
const success=document.getElementById("success");

function validateform()
{
    
    let errorflag=false;
    if(nameinput1.value.length<1)
    {
        errornodes[0].innertext="FirstName Required";
        nameinput1.classList.add('.error-border');
        errorflag=true;
    }
    if(nameinput2.value.length<1)
    {
        errornodes[1].innertext="LastName Required";
        nameinput2.classList.add('.error-border');
        errorflag=true;
    }
    else if(email.value.length<1)
        {
            errornodes[2].innertext="Email Required";
            email.classList.add('.error-border');
            errorflag=true;
        }
        
        if(password.value.length<8)
        {
            errornodes[3].innertext="Password Required";
            password.classList.add('.error-border');
            errorflag=true;
        }
        if(address.value.length<1)
        {
            errornodes[4].innertext="Address Required";
            address.classList.add('.error-border');
            errorflag=true;
        }
        if(contact.value.length<10)
        {
            errornodes[5].innertext="Contact Required";
            contact.classList.add('.error-border');
            errorflag=true;
        }
        if(errorflag==false)
            {
                success.innerHTML="Form Validation Successful"
            }
        }    