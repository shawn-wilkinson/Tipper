const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(4000, function(){
  console.log('server is listening...');
})
app.get('/tipper', function(req, rsp){
  rsp.render('tipper')
})

app.post('/tipper', function(req, rsp){
  const a = req.body.amtCharged * 1;
  const tp = req.body.tipPercent * 1;
  let tot = Math.ceil(((a * (tp + 1))*100)/100);
  rsp.render('tipper', {amtCharged: a, tipPercent: tp, total: tot})

})
