import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  
  let queryParams = request.nextUrl.searchParams;
  let filter = {};
  if (queryParams.get("location")) {
    let city = queryParams.get("location");
    filter = { city: { $regex: new RegExp(city, "i") } };
  } else if (queryParams.get("restaurant")) {
    let restoname = queryParams.get("restaurant");
    filter = { restoname: { $regex: new RegExp(restoname, "i") } };
  }

  await mongoose.connect(connectionStr, { useNewUrlaParser: true });
  let result = await restaurantSchema.find(filter);
  return NextResponse.json({ result, success: true });
}
