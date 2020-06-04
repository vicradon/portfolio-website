import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import Footer from './Footer'

const IndexLayout: React.FC = ({ children }) => {
  return <>
<Header />
{children}
<Footer />
  </>
}

export default IndexLayout
