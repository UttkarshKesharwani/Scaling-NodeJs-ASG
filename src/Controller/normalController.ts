
import { Request, Response } from 'express';


export const rootRoute = (req : Request ,res : Response  )=>{
  let c = 0;
  while (1) {
    if(c==100000) break;    c++;
    console.log(c);
  }
  return res.send(`root route ${c} ${process.pid}`);
}

export const homeRoute = (req : Request ,res : Response)=>{
  let c = 0;
  while (1 ) {
    if(c==100000) break;
    c++;
    console.log(c);
  }
  return res.send(`home route  ${c} ${process.pid}`)
}
export const signupRoute = (req: Request,res:Response)=>{
  let c = 0;
  while (1 ) {
    if(c==100000) break;    c++;
    console.log(c);
  }
  return res.send(`signup route ${c}  ${process.pid}`)
}
export const  loginRoute = (req:Request,res:Response)=>{
  let c = 0;
  while (1 ) {
    if(c==100000) break;    c++;
    console.log(c);
  }
  return res.send(`login route  ${c}   ${process.pid}`)
}