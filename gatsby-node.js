const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Gallery
  const result = await graphql(galleryQuery);
  result.data.allGalleryJson.edges.forEach((edge) => {
    createPage({
      path: `/gallery/${edge.node.date} ${edge.node.name}`,
      component: path.resolve("src/templates/gallery.js"),
      context: edge.node,
    });
  });
  const memberEdges = result.data.allMemberJson.edges;
  for (let i = 0; i < memberEdges.length; i++) {
    const edge = memberEdges[i];
    const prevUrl = i === 0 ? null : memberEdges[i - 1].node.url;
    const nextUrl =
      i === memberEdges.length - 1 ? null : memberEdges[i + 1].node.url;
    createPage({
      path: `/members/${edge.node.url}`,
      component: path.resolve("src/templates/member_page.js"),
      context: {
        node: edge.node,
        prevUrl: prevUrl,
        nextUrl: nextUrl,
      },
    });
  }
};

const galleryQuery = `
query {
  allGalleryJson(sort: { date: DESC }) {
    edges {
      node {
        id
        name
        photos
        date
      }
    }
  }
  allMemberJson(sort: { endDate: ASC }) {
    edges {
      node {
        id
        name
        url
        description
        image
        startDate
        endDate
        members {
          description
          image
          name
          position
          links {
            icon_type
            text
            url
          }
        }
      }
    }
  }
}
`;
