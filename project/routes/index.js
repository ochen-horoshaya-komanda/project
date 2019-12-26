const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET home page. */
/*router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;

router.get('/', (req, res) => {
    /*var events = [         
	    { 
	    	"name": "Поэтический вечер",
	    	"place": "БГУ",
	    	"image": faker.image.image(),  
	    	"latitude": faker.address.latitude(),
	    	"longitude": faker.address.longitude(),	    	
	        "time": faker.date.future(),
	        "type": "Общественный",
	        "rating": "5/10"
	    },
	    { 
	    	"name": "ТусовО4ка",
	    	"place": "1109а",
	    	"image": faker.image.animals(), 
	    	"latitude": faker.address.latitude(),
	    	"longitude": faker.address.longitude(),	    	
	        "time": faker.date.future(),
	        "type": "Общественный",
	        "rating": "7/10"
	    },
	    { 
	    	"name": "Mocha.js conference",
	    	"place": "БГУ",
	    	"image": faker.image.nightlife(), 
	    	"latitude": faker.address.latitude(),
	    	"longitude": faker.address.longitude(),	    	
	        "time": faker.date.future(),
	        "type": "Общественный",
	        "rating": "10/10"
	    },
	    { 
	    	"name": "Консультация по аналитической геометрии",
	    	"place": "БГУ",
	    	"image": faker.image.business(),  
	    	"latitude": faker.address.latitude(),
	    	"longitude": faker.address.longitude(),	    	
	        "time": faker.date.future(),
	        "type": "Общественный",
	        "rating": "11/10"
	    }
    ];*/ 

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
 
//res.render('index',{"events": events});
res.render('index',{"items": items});
 }); 

