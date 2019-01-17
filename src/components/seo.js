import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = ({
  metaData: {
    title
  }
}) => {
  return (
    <Helmet>
      {/* General tags */}
      <title>Site name {title ? `- ${title}` : ''}</title>

      {/* OpenGraph tags */}
      <meta property="og:title" content={title} />

      {/* Twitter Card tags */}
      <meta name="twitter:title" content={title} />
    </Helmet>
  )
}

SEO.propTypes = {
  metaData: PropTypes.shape({
    title: PropTypes.string
  }).isRequired
}

export default SEO
