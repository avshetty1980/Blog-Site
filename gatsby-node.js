const path = require("path");

// module.exports.onCreateNode = ({ node, actions }) => {

//     const { createNodeField } = actions;

//     if(node.internal.type === "MarkdownRemark") {

//         const slug = path.parse(node.fileAbsolutePath).name;
//         //console.log(`@@@@@@@@@ slug is ${slug}`);

//         createNodeField({
//             node,
//             name: "slug",
//             value: slug
//         });
//     }    
// }

module.exports.createPages = async ({ graphql, actions }) => {

    //1. get path to template
    //2. Get markdown data
    //3. Create new pages

    const { createPage } = actions;
    const blogTemplate = path.resolve("./src/templates/blog.js");

    const res = await graphql(`
        query {
           allContentfulBlogPost {
               edges {
                   node {
                       slug
                   }
               }
           }
        }
    `);
    
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })


}

