// Fix the function

//function sendEmail(to: string, subject: string, cc: string) {
   // console.log(to, subject, cc.toLowerCase());
//}

//sendEmail("test@mail.com", "Hello");

function sendEmail(to: string, subject: string, cc?: string):
void{
    if(cc){
        console.log(to, String, subject, cc.toLowerCase());

    }
    else{
        console.log(to, subject);
    }
}
sendEmail("test@mail.com", "Hello");