// determine if current page is active or not
export const getActive = (isStatic, pageSlug, router) => {
    if (isStatic !== false) {
      return isStatic == router.pathname.replace(/^\//g, '')
    } else {
      const slugs = [].concat(router.query.slug)
      const currentPath = slugs
        ? slugs.join('/')
        : router.asPath.replace(/^\//g, '')
      return currentPath == pageSlug
    }
  }
  
  export const getStaticRoute = (name) => {
    switch (name) {
      case 'homePage':
        return ''
      default:
        return false
    }
  }
  
  export const getDynamicRoute = (name) => {
    switch (name) {
      case 'collections':
        return 'shop-by-products'
      case 'product':
        return 'shop-by-products'
      case 'subCollections':
        return 'shop-by-products'
      case 'brands':
        return 'shop-by-brands'
      case 'news':
        return 'news-and-articles'
      default:
        return false
    }
  }
  
  export const getDynamicRouteForContent = (name) => {
    switch (name) {
      case 'collections':
        return 'shop-by-products'
      case 'product':
        return 'shop-by-products'
      case 'subCollections':
        return 'shop-by-products'
      case 'news':
        return 'news-and-articles'
      default:
        return false
    }
  }
  
  // TODO: Get product collection and subcollection