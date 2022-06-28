'use strict'

exports.fileDown = async (req, res) => {
    try {
        
        const filePath  = req.query.filePath
        const deleteSlash = filePath.indexOf('/',2)
        const name = filePath.substring(deleteSlash+1).substring(14)
        res.download(`./server/assets${filePath}`, name)
        
    } catch (err) {
        console.log(err)
        res.status(400).json({result : err})
    }
}


