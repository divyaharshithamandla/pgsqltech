const {Pool}=require("pg");
const pool=new Pool(
    {
        user:"postgres",
        password:"Na@9705267479",
        host:"localhost",
        port:5432,
        database:"pgTech"
    }
)
module.exports=Pool;