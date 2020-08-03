import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
  // TODO: Work on this
  // const goBack = () => {
  //   const path = window.location.pathname.split('/')[0]
  //   console.log(path)
  //   window.location.replace(`${path}`)
  // }
  const data = useStaticQuery(graphql`
    query SiteQuery1 {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div id="main">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
