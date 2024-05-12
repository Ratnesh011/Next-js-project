import { connectionStr } from "@/app/lib/db";
import { foodschema } from "@/app/lib/foodsModel";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";





export async function GET(request,content){
    const id=content.params.id;
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const restodetails=await restaurantSchema.findOne({_id:id});
    const foodsdetails=await foodschema.find({resto_id:id});
    return NextResponse.json({success:true,restodetails,foodsdetails});
}