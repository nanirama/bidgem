exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  
  if (page.path === `/`) {
    // remove old one
    deletePage(page)
    // and create new one with modified path
    createPage({
      ...page,
      path: `/index.html`
    })
  }
}