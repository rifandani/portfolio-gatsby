import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from 'components/ui/Timeline';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import FormatHtml from 'components/utils/FormatHtml';

import { SectionTitle } from 'helpers/definitions';

interface Certificate {
  node: {
    id: string;
    html: React.ReactNode;
    frontmatter: {
      issuer: string;
      issue: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Certificate: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "certificate section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "certificate" } } }
        # sort: { order: DESC, fields: fileAbsolutePath }
        sort: { order: ASC, fields: frontmatter___issuer }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              issuer
              issue
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const certificate: Certificate[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {certificate.map((item) => {
        const {
          id,
          html,
          frontmatter: { issuer, issue, startDate, endDate }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={issuer}
            subtitle={issue}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Certificate;
