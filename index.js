var express=require('express');
var tabs=require('./database/model');
var bodyParser=require('body-parser');
var app=express();
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.get('/tabs',function(req,res){
    var query={};
tabs.find(query,function(err,results){
    res.json(results);
});
});
app.get('/tabs/:tabId',function(req,res){
    var query={'_id':req.params.tabId};
    tabs.find(query,function(err,results){
    if(err){
       res.status(400).send(err);
        return;
     }
    res.json(results);
});
});
app.post('/tab',function(req,res){

    
    var tabData= new tabs();
    tabData.text="";
    tabData.save({},function(err,result){
     if(err){
       res.status(400).send(err);
         return;
     }
        res.json(result);
    });
    

});
app.put('/tab/:tabId',function(req,res){
    var query={'_id':req.params.tabId};
    
    tabs.findOne(query,function(err,tab){
       if(err||!tab){
         res.status(400).send(err);
         return;
     }
        tab.text=req.body.data;
        tab.save(function(err){
            if(err){
                res.status(400).send(err);
                return;
            }
            res.json(tab);
        
        });
        
        
        
    
    });

});

app.get('/tabs',function(req,res){
    var data={};
    var query={};
    tabs.find(query,function(err,results){
    if(err){
       res.status(400).send(err);
        return;
     }
    res.json(results);
});
    

});
app.get('/',function(req,res){
 res.sendFile(__dirname+'/views/index.html');
});


app.delete('/tab/:tabId',function(req,res){
    var query={'_id':req.params.tabId};
    
    tabs.remove(query,function(err,tab){
       if(err||!tab){
         res.status(400).send(err);
         return;
     }
          res.json(tab);
    
    });

});
app.use(express.static(__dirname));
var server=app.listen(9000);
console.log('Listening on 9000');