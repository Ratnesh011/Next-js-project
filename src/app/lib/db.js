const {name,password}=process.env

export const  connectionStr="mongodb+srv://"+name+":"+password+"@cluster0.y3raoom.mongodb.net/foodDB?retryWrites=true&w=majority&appName=Cluster0";

