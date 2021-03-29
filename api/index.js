const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

const initalData = {
	steps: [
	    Array(9).fill(null)
	],
	currentStep: 0,
	isNextX: true
};

const tmpData = {
	steps: [
	    Array(9).fill(null)
	],
	currentStep: 0,
	isNextX: true
};

app.get('/api/data', (req, res) => {
  res.json(tmpData);
});

app.post('/api/data', (req, res) => {
  tmpData.steps = [
  	...tmpData.steps,
  	req.body
  ];
  tmpData.currentStep = tmpData.currentStep + 1;
  tmpData.isNextX =  ! tmpData.isNextX;
  res.json(tmpData);
});

app.put('/api/data', (req, res) => {
  const index = parseInt(req.body.id || 1);
  if(index === 0) {
  	tmpData = initalData;
  	return res.json(tmpData);
  }
  tmpData.steps 		= tmpData.steps.slice(0, index);
  tmpData.currentStep 	= index <1 ? 0: (index-1);
  tmpData.isNextX 		= (tmpData.currentStep % 2 === 0);
  res.json(tmpData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));