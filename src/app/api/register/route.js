//1.
//import { NamedImport } from "somelibrary"
//import {  PrismaClient } from "@prisma/client"
const bcrypt = require('bcrypt');
const saltRounds = 10;

import prisma from "@/lib/prisma";

//2 Defination area
//let classObject = new ClassName();
//let prisma = new PrismaClient();
export async function POST(request){
    const res = await request.json()
    console.log(res);

    //Destructuring and object
    const {name,email,password,role} = res;
    const hash = bcrypt.hashSync(password, saltRounds);
    //2.1

    try {
        //User Register
        //prima.model.method()
        const user =  await prisma.user.create({
            data: {
              name:name,
              email: email,
              password: hash,
              role: role
            },
          });
        //2.3. return Statement
        return Response.json({ status:200,msg:"hi",res:user })
          //Success
    } catch (error) {
        //Fail
        return Response.json({ status:400,msg:"hi",res:"user" })
    }

    //2.2
    
}


//3