const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.render("projects")
})

router.get("/:projectName",(req,res)=>{
        res.render(`projects/${req.params.projectName.toLocaleLowerCase()}`,(err)=>{
            if(err){
                res.sendStatus(404)
            }
            else{res.render(`projects/${req.params.projectName.toLocaleLowerCase()}`)}
        });
})

module.exports = router

// file name must be in lowercase and stored under views/projects