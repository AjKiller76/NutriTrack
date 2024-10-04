import Diet from "../model/diet.model.js"

export const getDiet=async(req,res)=>{
    try{
            const diet=await Diet.find()
            res.status(200).json(diet)
    }catch(error){
        console.log("Error:",error)
        res.status(500).json(error)
    }
}