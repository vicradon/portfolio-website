import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
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
        <section id="one">
          <header className="major">
            <h2>
              Hello there!
              <br style={{display:'block'}} />
              Welcome to my digital garden
            </h2>
          </header>
          <p>
            I am available for hire. I'm currently freelacing, but would happily take a job.
            I mainly work with React.js and Node.js. I write technical content when I'm not
            coding.
          </p>
          <ul className="actions">
            {/* <li>
              <Link to="/portfolio" className="button">
                See Portfolio
              </Link>
            </li> */}
            {/* <li>
              <Link to="/portfolio" className="button">
                Download Resume
              </Link>
            </li> */}
          </ul>
        </section>

{/* 
        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <Link to="/portfolio" className="button">
                Full Portfolio
              </Link>
            </li>
          </ul> 
        </section>

         <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Do you wish to discuss a potential project or need consulting
            services? Then get in touch.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </section> */}
      </div>
    </Layout>
  )
}

export default HomeIndex
