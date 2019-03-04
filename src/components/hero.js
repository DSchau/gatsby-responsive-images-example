import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import styles from './hero.module.css'

export default function Hero() {
  const images = useStaticQuery(graphql`
    {
      mobile: file(relativePath:{
        regex:"/phone.jpg/"
      }) {
        childImageSharp {
          fluid(maxWidth:500) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      desktop: file(relativePath:{
        regex:"/desktop.jpg/"
      }) {
        childImageSharp {
          fluid(maxWidth:1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={styles.hero}>
      <Image className={[styles.heroImage].concat(styles.mobile).join(' ')} fluid={images.mobile.childImageSharp.fluid} />
      <Image className={[styles.heroImage].concat(styles.desktop).join(' ')} fluid={images.desktop.childImageSharp.fluid} />
    </div>
  )
}
