import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";

import blogStyles from "./blog.module.scss"



const BlogPage = () => {

    const posts = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
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
        {posts.allMarkdownRemark.edges.map(post => (
             
            <li className={blogStyles.post} key={post.node.frontmatter.title}>           
                <h2><Link to={`/blog/${post.node.fields.slug}`}>{post.node.frontmatter.title}</Link></h2>
                <p>{post.node.frontmatter.date}</p>
            </li> 
            
        ))}
        </ol>                         
        
        </Layout>
        </div>
    );
}

export default BlogPage;