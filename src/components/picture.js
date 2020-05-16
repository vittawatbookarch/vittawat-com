import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImgBlock = (props) => (
    <StaticQuery
        query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

        render={(data) => {
            const image = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename);
            });
            if (!image) { return null; }

            const imageSizes = image.node.childImageSharp.sizes;
            return (
                <Img
                    alt={props.alt}
                    sizes={imageSizes}
                    style={{ width: "100%", height: "100%" }}
                    imgStyle={{
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                    }}
                />
            );
        }}
    />
)

export default ImgBlock