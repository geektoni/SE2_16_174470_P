# Code Review

### Abstract
This is the code review of the [menuDA](https://github.com/xGioe/SE2_16_174470_P/blob/master/dataAccess/menuDA.js) file. 

### Review

This class implements a model data access so there are all the methods which manage the *menu* object. The code conforms to the MVC pattern because it is free of HTML tags or other elements that should be in the "view" part of the application.

The code is well-structured, consistent in style and consistently formatted. All the methods are written in camelcase notation (for example, ```getPastiByGiorno()```) and all the variables are named following a "C" style convention (for example, ```new_settimana```). The objects have the first letter capitalized (like ```Pasto```, ```Data``` etc.).

All the procedures contain reachable code (it means that there are no code branches that cannot be reached as a result of some input/s) and also there are no unused variables. The code is also free of stubs or test routines (for example, ```console.log()``` used for debug purposes).

The code is also well-documented as each method as an explanation written with a Doxygen style notation. There are also some schemas that show how the data object are represented (for example, at ```line 5``` there is an "image" of the internal structure of the ```menu``` object).

However there is a method called ```cleanMenu()``` that is called **only once** in all the project (declared here and in the model unit test file). Maybe there could be a bettere way to simulate this functionality without declaring a new function that will be used a very few times.

Moreover, the last part of the file contains a lot of initialization code that is used to populate the database (the variable ```menu```). I would rather prefer to have all the database initialization data in a separate js file that will be called once, as a first step for the application startup process. In fact, this file should contain **only** methods to retrieve/insert data from the database and not also the data of the database itself.

### Author Information
**Giovanni De Toni (171838) | giovanni.detoni@studenti.unitn.it**
