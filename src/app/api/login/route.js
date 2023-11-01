//1. Import Area
var jwt = require('jsonwebtoken');
//CRUD
import prisma from "@/lib/prisma";

//2. Function defination area
async function POST(request){
    const res = await request.json();
  //const { variableName} = JSObject
    const { email,password,role } = res;
    
    try {
        const user = await prisma.user.findUnique({ where:{ email:email } });
        if (!user) {
            return Response.json({status:404,msg:"Invalid Credentials"});
        }else{

            //Generate the JWT Token
            var token = jwt.sign(user, process.env.JWT_SECRET_KEY);

            return Response.json({
                                    status:200,
                                    msg:"Login Success",
                                    jwt:token,
                                    user
                                });
        }
    } catch (error) {
        return Response.json({status:404,msg:"Invalid Credentials"});    
    }

    //Query with DB and find if an email is available with the email
    //To extract information for the js object we use Destructuring
    //2.1

    //2.2

    //2.3 Return statment
   
}


//3 Export area
//3.2 NamedExport
module.exports = { POST }


