const PORT = 8000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const articles =[]

app.get('/', function (req, res) {
    res.json('Hello World')
  })

app.get('/news', function (req, res) {
    
    axios.get('https://theguardian.com/')
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("President")', html).each(function (){
                const title = $(this).text()
                const url = $(this).attr('href')
                articles.push({
                    title,
                    url,
                })
            })
            res.json(articles)
        }).catch((err) => console.log(err))
  })

app.listen(PORT, () => console.log('server is running on PORT 8000'))