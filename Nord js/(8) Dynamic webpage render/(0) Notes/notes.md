Templete engine 
--
* A template engine is a tool used in web development to generate HTML dynamically.
* It allows you to embed code within your HTML to produce dynamic content based on data
* Template engines are commonly used in server-side rendering to create HTML pages that are sent to the client's browser.


EJS
--

* EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript.
* It is one of the popular template engines for Node.js and Express.js applications.
* EJS allows you to embed JavaScript code within your HTML using special tags.

Dynamic webpages
--

To create th dynaic webpages  you have to :

step 1 ) set he view engine t EJS
   
    app.set('view engine', 'ejs')

Step 2 ) create a public folder and add the "index.ejs" file.

step 3 ) write he normal HTML in the index.ejs file and dynamic data variables are writen with syntex:

    <%= Variable %>

step 4 )  use :

    res.render('index', data)

inside tha app.get  to render the index.ejs and data coming from sources