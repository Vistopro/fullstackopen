# Countries

In this exercise, we created an application, in which one can look at data of various countries. The data are fetched from the API https://studies.cs.helsinki.fi/restcountries/api/all, that provides a lot data for different countries in a machine readable format, a so-called REST API.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

In this application, it is also possible to see the current weather in the country's capital.

## Start the application

To start an application, do the following :

```bash
# Install dependancies
$ npm install
# create a .env file and put there the API KEY for retrieving data from https://weatherstack.com/
$ echo "REACT_APP_API_KEY=<YOUR-API-KEY>" > .env
# Start the application
$ npm start
```

You can then access the app on : [http://localhost:3000/](http://localhost:3000/)
