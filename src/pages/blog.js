import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

import blogStyles from "./blog.module.scss"



const BlogPage = () => {

    // const posts = useStaticQuery(graphql`
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                         date
    //                     }
    //                     fields {
    //                         slug
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `);

    const posts = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                filter: {
                    node_locale: {
                        eq: "en-US"
                    }
                }
                sort: {
                    fields: publishedDate,
                    order: DESC
                }
            ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString: "Do MMMM, YYYY")
                        location {
                            lat
                            lon
                        }
                    }
                }
            }
        }
    `);

    return (
        <div>
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>  
        {posts.allContentfulBlogPost.edges.map(post => (
             
            <li className={blogStyles.post} key={post.node.title}>           
                <h2><Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link></h2>
                <p>{post.node.publishedDate}</p>
                <p>Latitude:{post.node.location.lat}, Longitude:{post.node.location.lon}</p>
                
            </li>             
        ))}
        </ol>                         
        
        </Layout>
        </div>
    );
}

export default BlogPage;