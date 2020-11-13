import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

// export const query = graphql`
//              query (slug: String!) {
//                   markdownRemark ( fields: { slug: { eq: $slug } }) {
//                                     frontmatter {
//                                                     title
//                                                     date
//                                                 }
//                                     html
//                                     }
//                                 }
//                     `

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "Do MMMM, YYYY")
        }
    }
`


const Blog = ({ data }) => {

    return (
        <Layout>
            {/* <h1>{data.markdownRemark.frontmatter.title}</h1>
            <p>{data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div> */}
            <h1>{data.contentfulBlogPost.title}</h1>
            <p>{data.contentfulBlogPost.publishedDate}</p>
        </Layout>
    );
}

export default Blog;