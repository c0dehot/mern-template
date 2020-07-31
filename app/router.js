// const orm = require('./orm');

function router( app ){
    app.get('/api/endpoint/:stuff?', async function(req, res) {
        // const due = req.params.due ? { due: req.params.due } : ''
        console.log( `[GET] getting list, params`, req.params )
        // const list = await orm.getList( due )
        const list = [ "big", "puffy", "tall" ]

        res.send( list )
    })

    app.post('/api/endpoint', async function(req, res) {
        console.log( '[POST] we received this data:', req.body )
        // const saveResult = await orm.insertTask( req.body.priority, req.body.info, req.body.due )
        // console.log( `... insertId: ${saveResult.insertId} ` )

        res.send( { status: true, message: 'Saved successfully' } )
    });
}

module.exports = router
