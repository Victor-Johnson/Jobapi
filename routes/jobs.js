const express = require('express');
const router = express.Router();

router.get('/api/v1',(req,res)=>{
    res.status(200).json({
        sucess: true,
        message : 'This route will display all jobs in future. '
    });
})


module.exports = router;