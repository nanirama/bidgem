exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  
  if (page.path === `/index.html`) {
    // remove old one
    deletePage(page)
    // and create new one with modified path
    createPage({
      ...page,
      path: `/`
    })
  }
}