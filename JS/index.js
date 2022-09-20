const logoIcon = document.querySelector('bigLogo');
const css = document.getElementById("cssL");
const img = document.getElementById("BLogo");
const wordpress = document.getElementById("wordpressL");
const js = document.getElementById("jsL");
const html = document.getElementById("htmlL");
const descPlaceholder = document.querySelector('descHolder');
const title = document.getElementById('langName');
const paragraph = document.getElementById('langText');


css.addEventListener("click", () => {
    img.src = "./Images/CSS-Logo-500x313.png";
    img.classList.add("imgcard");
   
    title.innerText = 'CSS';
    paragraph.innerText = 'CSS (Cascading Style Sheets) is used to style and lay out web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features. This module provides a gentle beginning to your path towards CSS mastery with the basics of how it works, what the syntax looks like, and how you can start using it to add styling to HTML.';

})

wordpress.addEventListener("click", () => {
    img.src = "./Images/1200px-Wordpress_Blue_logo.png";
    img.classList.add("imgcard");

    title.innerText = 'WordPress';
    paragraph.innerText ='WordPress is a free, open-source website creation platform. On a more technical level, WordPress is a content management system (CMS) written in PHP that uses a MySQL database. In non-geek speak, WordPress is the easiest and most powerful blogging and website builder in existence today. WordPress is an excellent website platform for a variety of websites. From blogging to e-commerce to business and portfolio websites, WordPress is a versatile CMS. Designed with usability and flexibility in mind, WordPress is a great solution for both large and small websites.';
 

})

js.addEventListener("click", () => {
    img.src = "./Images/JavaScript-Logo.png";
    img.classList.add("imgcard");

    title.innerText = 'JavaScript';
    paragraph.innerText ='avaScript is a lightweight, cross-platform, and interpreted compiled programming language which is also known as the scripting language for webpages. It is well-known for the development of web pages, many non-browser environments also use it. JavaScript can be used for Client-side developments as well as Server-side developments. Javascript is both imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.';
})

html.addEventListener("click", () => {
    img.src = "./Images/5968267.png";
    img.classList.add("imgcard");

    title.innerText = 'HTML';
    paragraph.innerText ='At its heart, HTML is a language made up of elements, which can be applied to pieces of text to give them different meaning in a document (Is it a paragraph? Is it a bulleted list? Is it part of a table?), structure a document into logical sections (Does it have a header? Three columns of content? A navigation menu?), and embed content such as images and videos into a page. This module will introduce the first two of these and introduce fundamental concepts and syntax you need to know to understand HTML.';
})

