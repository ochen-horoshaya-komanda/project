const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
/*router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;

router.get('/cities', (req, res) => {
    var cities = [         
	    { 
	    	"name": faker.name.title(),
	    	"id": "1"
	    },
	    	   { 
	    	"name": faker.name.title(),
	    	"id": "2"
	    },
	    	  { 
	    	"name": faker.name.title(),
	    	"id": "3"
	    },    ]; 
 
res.render('cities',{"cities": cities});
 }); 


router.get('/museums', (req, res) => {
    var museums = [         
	    { 
	    	"name": faker.name.title(),
	    	"id": "1"
	    },
	    	   { 
	    	"name": faker.name.title(),
	    	"id": "2"
	    },
	    	  { 
	    	"name": faker.name.title(),
	    	"id": "3"
	    },    ]; 
 
res.render('museums',{"museums": museums});
 }); 


router.get('/items', (req, res) => {
    var items = [
    	{
    		"name": faker.name.title(),
    		"image": faker.image.cats()
    	},
    	{
    		"name": faker.name.title(),
    		"image": faker.image.cats()
    	},
    	{
    		"name": faker.name.title(),
    		"image": faker.image.cats()
    	}
    ];
 
res.render('items',{"items": items});
 }); 
