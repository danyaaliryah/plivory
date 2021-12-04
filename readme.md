## Taslo Sweets BLOG 
### _Final project for CS50W_
## Description
Taslo Blog is a website that I created for my small Business specialized in sweets. It contains some of the Business’s achievements and previous works and my cartoon characters  some information about it , make the Business and what it offers clearer to customers

Made with Django Framework in backend and JavaScript in frontend
## Distinctivness and Complexity
My project is different from the things performed during the course, it has some similarities with some but it is a combination of them all, as well as with some other things learned by my self and added, some examples could be the the use of Image files , I have benefited from previous projects such as Commerce in the idea of blogs and from the linking of pages to each other from the wiki project , For the Complexity Requirement I can explain some things I had to learn by my self like some of functions for javescript and making the style of the website simple and full of colors , for the post requests I used django forms, javascript was used to put everything together and display it (frontend) and for the backend pyhton Django was used, i create 2 models one is for the blog posts (It contains a picture, title and date of creation of the blog, in addition to a detailed explanation). I use bootstrap to make the website looks professional 
i put social media links so people can visit them
## Capstone Requirements
 - Must not be similar to previous projects
 - Must utilize Django on the back-end
-  Must utilize JavaScript on the front-end
 - Must be mobile-responsive
 - What's contained in each file
-  How to run the application
 - A requirements.txt file documenting additional Python packages that must be installed to run the application, if any
 - Must contain a comprehensive README.md file that describes my project in detail, and specifically: - How this project satisfies the complexity requirements above - What's contained in each file I've created - How to run this application - Any other information the staff should know about this project

## How To Run This Application
- Copy the project to your system.
- Using the command line, navigate to the folder that contains this repo.
- Verify you have Python and Django installed on your system. If not you will need to load them.
- write cd taslo
- Then Use python manage.py runserver to open the site.
- then open the site by copy this link to your web browser.

```sh
127.0.0.1:8000
```
### Preview:
![N|Solid](https://i.top4top.io/p_2082nbisi1.jpg)

## Project structure and file contents

On the back-end there are two models: BlogModel for blog posts , RecentWork for taslo characters 
```sh
urls.py
```
 holds paths for 6 pages (''(same as home), home, about ,blog-detail, contact and about)
On the front-end there are 6 html template files, some scripts( main that i write it , and some jquery files and validartor also Bootstrap js (i load then all in one html called scripts.html ), some stylesheets (some for Bootstrap , animation and also the custom )  and some logo , about page images.

| File | Content
| ------ | ------ |
| urls.py | Holds views for pages |
| models.py	 | Keeps models for BlogModel for blog posts , RecentWork for taslo characters  |
| helpers.py | for slug-generator |
| templates/base.html | Basic html structure and external files |
| templates/blogs.html | allow visiters to display all the blogs  |
| templates/blog_detail.html | to view each blog |
| templates/base.html | to view the home page |
| templates/contact.html | to view the contact page and the working times|
| templates/about.html | to view the about page | | [plugins/medium/README.md][PlMe] |
| js/main.js | Bootstrap js |
| js/wow.min.js | Bootstrap js  |
| js/main.js | Theme js |
| css/custom.css | some custom css that i add |
| all.css  ,animate.css   ,default.css   ,magnific-popup.css   ,nouislider.css ,swiper.min.css | some theme css and Bootstrap |

##  [Project requirements - CS50W](https://cs50.harvard.edu/web/2020/projects/final/capstone/)
##  [CS50's web programming with Python and JavaScript](https://cs50.harvard.edu/web/2020/)