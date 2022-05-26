const express = require('express')
const path = require('path')
    // import { engine } from 'express-handlebars';
const blogs = require('../data/content')
    // defining route
const router = require('express').Router();

router.get('/', (req, res) => {

    res.render('home')

})

router.get('/blogs', (req, res) => {

    res.render('blogs', { blogs: blogs })
})

router.get('/blogs/:slug', (req, res) => {

    view = blogs.filter(e => {
        return e.slug == req.params.slug
    });


    view = view[0]
    res.render('blogsView', { title: view.title, content: view.content, author: view.author })
})

module.exports = router