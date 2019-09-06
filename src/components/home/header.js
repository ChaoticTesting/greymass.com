import React, { Component } from "react"

import { Container } from 'semantic-ui-react';
import { translate } from 'react-i18next';
import { graphql, Link, StaticQuery } from 'gatsby';

import Img from 'gatsby-image';

class HomeHeader extends Component {
  render() {
    const { data, t } = this.props;

    const imageStyles = {
      display: 'block',
      margin: 'auto',
      maxWidth: '800px',
    };
    const headerTextStyles = {
      fontFamily: 'Montserrat',
      fontSize: '26px',
      fontStyle: 'normal',
      fontWeight: '500',
      letterSpacing: '0.02em',
      lineHeight: '44px',
      margin: 'auto',
      paddingTop: '60px',
      paddingBottom: '20px',
      maxWidth: '600px',
      textAlign: 'center',
      textTransform: 'uppercase',
    };
    const subheaderTextStyles = {
      fontFamily: 'Roboto',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: 'normal',
      letterSpacing: '0.02em',
      lineHeight: '30px',
      textAlign: 'center',
      margin: '0',
    };
    const supportUsLinkStyle = {
      color: '#0091E2',
      textTransform: 'uppercase',
      fontSize: '16px',
    };
    return (
      <Container style={{ paddingBottom: '50px' }} basic>
        <h4 style={headerTextStyles}>
         {t('header_one')}
        </h4>
        <Img
          fluid={data.fileName.childImageSharp.fluid}
          alt='greymass-header-image'
          style={imageStyles}
        />
        <h4 style={headerTextStyles}>
          {t('header_two')}
        </h4>
        <div style={{ marginTop: '40px' }}>
          <h5 style={subheaderTextStyles}>
            {t('subheader_one')}
          </h5>
          <h5 style={subheaderTextStyles}>
            {t('subheader_two')}
            &nbsp;
            <Link style={supportUsLinkStyle} to={`#support-us`}>
              {t('subheader_two_link_text')}
            </Link>
          </h5>
        </div>
      </Container>
    )
  }
}

const HomeHeaderWrapper = translate('home')(HomeHeader);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "images/greymassHeaderImage.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HomeHeaderWrapper data={data} {...props} />}
  />
);