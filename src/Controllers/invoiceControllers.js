import connection from "../Configs/Db.js";
import { StatusCodes } from "http-status-codes";


export async function add_items(req, res){
    console.log(req.body)
 var { item, qty, rate, amount}=req.body;


 connection.query('insert into invoicedetails (`item`, `qty`, `rate`,`amount`) values ("'+item+'", "'+qty+'","'+rate+'","'+amount+'")',(err, rows)=>{
if(err){
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({messsage:"something went wrong"})
}else{
    res.status(StatusCodes.OK).json({message:"Add item successfully"})
}
 })
}

export async function get_all_items(req, res){

    connection.query('select * from invoicedetails ',(err, rows)=>{
   if(err){
       console.log(err)
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({messsage:"something went wrong"})
   }else{
       res.status(StatusCodes.OK).json({data:rows})
   }
    })
   }


   export async function get_itemById(req, res){
var {id}=req.query;
    connection.query('select * from invoicedetails where id= "'+id+'" ',(err, rows)=>{
   if(err){
       console.log(err)
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({messsage:"something went wrong"})
   }else{
       res.status(StatusCodes.OK).json({data:rows})
   }
    })
   }


       export async function delete_item(req, res){
        var {id}=req.query;
            connection.query('delete from  invoicedetails where id= "'+id+'" ',(err, rows)=>{
           if(err){
               console.log(err)
               res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({messsage:"something went wrong"})
           }else{
               res.status(StatusCodes.OK).json({messsage:"item delete successfully"})
           }
            })
           }