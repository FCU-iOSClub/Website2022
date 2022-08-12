const path = require(`path`);

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  // Gallery
  const result = await graphql(galleryQuerry);
  result.data.allGalleryJson.edges.forEach((edge) => {
    createPage({
      path: `/gallery/${edge.node.date} ${edge.node.name}`,
      component: path.resolve("src/templates/gallery.js"),
      context: edge.node,
    });
  });
  result.data.allMemberJson.edges.forEach((edge) => {
    createPage({
      path: `/members/${edge.node.url}`,
      component: path.resolve("src/templates/member_page.js"),
      context: {
        node: edge.node,
      }
    });
  });
};

const galleryQuerry = `
query {
  allGalleryJson (
    sort: { fields: [date], order: DESC }
  ) {
    edges {
      node {
        id
        name
        photos
        date
      }
    }
  }
  allMemberJson(sort: { order: ASC, fields: endDate }) {
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
        }
      }
    }
  }
}
`;
