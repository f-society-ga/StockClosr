# **StockClosr**
## *Leverage The Wisdom Of The Crowd!*
#### *Make predictions on the closing price of stocks*.
![banner](images/banner.jpg)

##Technologies Used
![logo](images/nodejs-520.jpg)

Javscript: Node.js, Express, jQuery, npm

Database: MongoDB, RoboMongo (data vizualization)

Front End: HTML5, CCS3 + Sass, template from 'HTML5 Up'

API: **[Markit On Demand](http://dev.markitondemand.com/MODApis/)**

**Standout Node Modules**
	
	1. 'passport-google-outh20': enable users to login using Google account.
 	2. 'ejs': embedded javascript templates for views.
 	3. 'moment': JavaScript date library for parsing, validating, manipulating, and formatting dates.	
 	4. 'mongoose': MongoDB object modeling tool. 
 	5. 'request': simple way to make HTTP calls.
 	6. 'express-session': session middleware for express.
 



##General approach
We began by addressing the issue of volatility in the stock market.  An emerging trend in technology is prediction markets for which we found a great example in the arena of politics with **[PredicIt](www.predictit.org).**  We decided to apply a similar concept to the stock market and see if we could create a web app that would make daily predictions of stock behaviour using a mathematical concept called "Wisdom of the Crowd".  

### *Wisdom Of The Crowd*
*A large group's aggregated answers to questions involving quantity estimation, general world knowledge, and spatial reasoning has generally been found to be as good as, and often better than, the answer given by any of the individuals within the group.*


##Installation instructions
1. Go to the [project repository.](https://github.com/f-society-ga/StockClosr).
2. Click on clone or download the repository.
3. Once the repository is downloaded, run npm install.
4. Open another terminal screen in the root of the project and run nodemon.
5. Open another terminal screen in the root project and run mongod.  
6. Navigate to localhost:3000 and enjoy!

**Or** Vist: [https://stockclosr.herokuapp.com/](https://stockclosr.herokuapp.com/)

##Project Planning
###[Trello, Wireframes, ERD](https://trello.com/b/1pUeWbrg/project-3 "F.Society Trello")
###[Presentation Deck](https://prezi.com/nfm5rlv-wgd0/stockclosr/ "F.Society Trello")

##Unsolved Problems
* Unable to lock in stock prediction after the first two hours of market being open and have it cleared out by the next day.
* Finding a way to aggregate and display average of user's predictions on single stock.
* Using a html template interfered with the use of Materialize.

