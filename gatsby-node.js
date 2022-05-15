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
}
`;
