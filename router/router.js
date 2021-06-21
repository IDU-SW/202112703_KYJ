const express = require('express');
const router = express.Router();
const Model = require('../model/Model');

router.get('/info', List);
router.get('/info/:id',Detail);
router.post('/info', add);
router.put('/info', update);
router.delete('/info/:id', Delete);
router.get('/person',function(req,res){
    res.render('index.html')
})


module.exports = router;

function List(req, res) {
    const List = Model.List();
    const result = { data:List, count:List.length };
    res.send(result);
}

async function Detail(req, res) {
    try {
        const id = req.params.id;
        console.log('id: ', id);
        const infomation = await Model.Detail(id);
        res.send(infomation);
    }
    catch (error) {
        console.log('Can not find, 404');
        res.status(error.code).send({msg:error.msg});
    }
}

async function add(req, res) {
    const data = req.body;
    try {
        const result = await Model.add(data);
        res.send({msg:'success', data:result});
    } catch (error) {
        res.status(500).send(error.msg);
    }
}

async function update(req, res) {

    const data = req.body;

    const name = data.name;
    const address = data.address;

    if ( !name || !address) {
        res.status(400).send({error:'Fail'});
        return;
    }

    try {
        const result = await Model.update(data);
        res.send({msg:'Updated info' + data.name, data:result});
    }
    catch ( error ) {
        console.error(error);
        res.status(500).send({error:'Fail'});
    }
}


async function Delete(req, res) {

    try {
        const id = req.params.id;
        console.log('Deleted : ', id);
        const result = await Model.Delete(id);
        res.send({msg:'Deleted info', data:result});
    }
    catch ( error ) {
        res.status(400).send({error:'Fail'});
    }
}