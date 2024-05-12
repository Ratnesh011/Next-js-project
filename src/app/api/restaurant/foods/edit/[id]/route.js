import { connectionStr } from "@/app/lib/db";
import { foodschema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(request,content){
    let id=content.params.id;
    let success=false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const result=await foodschema.findOne({_id:id});
    if(result){
        success=true;
    }
    return NextResponse.json({result,success})
}


export async function PUT(request,content){
         let id=content.params.id;
         let payload=await request.json();
         let success=false;
         await mongoose.connect(connectionStr,{useNewUrlParser:true});
         const result=await foodschema.findOneAndUpdate({_id:id},payload)
         if(result){
            success=true;
         }
         
    return NextResponse.json({result,success})
}