import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';
import Certificate from 'components/Certificate';
import Skills from 'components/Skills';

const ResumePage: React.FC = () => (
  <Layout>
    <SEO title="Resume" />
    <Experience />
    <hr />
    <Education />
    <hr />
    <Certificate />
    <hr />
    <Skills />
  </Layout>
);

export default ResumePage;
