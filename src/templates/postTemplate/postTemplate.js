import React from 'react'
import { Redirect } from 'react-router-dom'
import Layout from '../layout'
import postlist from '../../JSON/posts.json'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
    PostContainer,
    PostTitle,
    PostDetails,
} from './PostTemplateElements'


const PostTemplate = (props) => {
    const validId = parseInt(props.match.params.id)
    if(!validId) {
        return <Redirect to="/404" />
    }
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : 'No title given'
            fetchedPost.date = post.date ? post.date : 'No date given'
            fetchedPost.author = post.author ? post.author : 'No author given'
            fetchedPost.content = post.content ? post.content : 'No content given'
            postExists = true
        }
    })
    if(postExists === false) {
        return <Redirect to="/404" />
    }


    return (
        <Layout>
            <PostContainer>
                <PostTitle>{fetchedPost.title}</PostTitle>
                <PostDetails>Published on {fetchedPost.date} by {fetchedPost.author}</PostDetails>
                <hr />
                <Markdown 
                    source={fetchedPost.content} 
                    escapeHtml={false} 
                    plugins={[gfm]}
                />
            </PostContainer>
        </Layout>
    )
}

export default PostTemplate
