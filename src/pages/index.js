import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.header_img)}>
      <div className="container">
        <h1 className={clsx('hero__title', styles.header_titles)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.header_titles)}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageOtherWebSites() {
  return (
    <section className={styles.home_section}>
      <div className="container">
        <h1>Other RobyPomper's Web Sites</h1>
        <div className="row">
          <ul>
            <li>
              <Link to="https://www.johnosproject.org">John OS Project</Link><br/>
              (<Link to="https://specs.johnosproject.org">Specs</Link>
              | <Link to="https://docs.johnosproject.org">Docs</Link>
              | <Link to="https://jcp.johnosproject.org">Public JCP</Link>)
            </li>
            <li><Link to="https://smartvan.johnosproject.org">Smart Van</Link></li>
            <li><Link to="https://smartaladino.johnosproject.org">Smart Aladino</Link></li>
            <li><Link to="https://utils_libs.robypomper.org">Utils Libs</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomepageSections() {
  return (
    <section className={styles.home_section}>
      <div className="container">
      <div className={styles.home_section_sub_right}>
        <h1>My Sections</h1>
        <div className="row">
          <ul>
            <li><Link to="docs/intro">My Presentation</Link></li>
            <li><Link to="docs/category/my-projects">My Projects</Link></li>
            <li><Link to="docs/category/my-sports">My Sports</Link></li>
            <li><Link to="docs/photos">My Photos</Link></li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}

function HomepageSocial() {
  return (
    <section className={styles.home_section}>
      <div className="container">
        <h1>RobyPomper's Social</h1>
        <div className="row">
          <ul>
            <li><Link to="https://www.linkedin.com/in/roberto-pompermaier-474a4132/">Linkedin</Link></li>
            <li><Link to="https://github.com/robypomper">GitHub</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Roberto Pompermaier's personal web site">
      <HomepageHeader />
      <main>
        <HomepageOtherWebSites />
        <HomepageSections />
        <HomepageSocial />
      </main>
    </Layout>
  );
}
