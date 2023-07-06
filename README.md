# robypomper.github.io

Repository that exports the [www.robypomper.org](https://www.robypomper.org)
Web Site as GitHub Pages.

* **WebSite Version:** 0.0.1
* **Content Version:** 20230706

[CHANGELOG](CHANGELOG.md) | [TODOs](TODOs.md) | [LICENCE](LICENCE.md)

Current repo contains the source code of the Web Site published at [www.robypomper.org](https://www.robypomper.org).
This WebSite is based on [Docusaurus](https://docusaurus.io/)/[Node.js](https://nodejs.org/en)
and is structured into the following 4 sections, plus a [Blog](https://www.robypomper.org/blog):

* [My Presentation](https://www.robypomper.org//docs/intro)
* [My Projects](https://www.robypomper.org/docs/category/my-projects)
* [My Sports](https://www.robypomper.org/docs/category/my-sports)
* [My Photos](https://www.robypomper.org/docs/photos)

This repo, contrary other repos, use 4 principal brances:
* `main`: release branche used to merge `develop` and `content` branches
* `develop`: classic development branch used for Docusuarus configs and implementations
* `content`: branch dedicated to the contents updates
* `gh-pages`: dedicated branch to the GitHub Pages deployment


## Run

To see the live version, please open a browser and navigate to [https://www.robypomper.org](https://www.robypomper.org).

Otherwise, to run it locally execute following commands. Remember that [Node.js](https://nodejs.org/en)
and [Yarn](https://yarnpkg.com/) must be installed on your machine in order to
run this WebSite locally.

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.
This command will also open the [http://localhost:3000/](http://localhost:3000/)
url in a local browser.

With the WebSite running locally using the `start` sub-command, you can edit
content or docusaurus files and see the updates immediately at [http://localhost:3000/](http://localhost:3000/).

## Develop

This project allows 2 kind of updates:
* contents update: anything related with sections docs or blog articles
* and docusaurus updates: everything else like docusaurus configs but also commons react components

### Update contents

When you must update some content you can use the `content` branch and create a
sub-branch to commit your work. Once you have terminated with the task, then you
can merge you sub-branch to the `content` branch.<br/>
Only when all content changes has been approved, the `content` branch can be
merged into the `main` one. That triggers the [GitHub Actions](https://github.com/robypomper/robypomper.github.io/actions)
that builds and deploys the live [www.robypomper.org](https://www.robypomper.org)
WebSite.

### Update Docusaurus & Co.

Before starting any new update, if not yet done, it's required to merge the
`main` branch into the `develop` one.

Then when your `develop branch is up-to-date, you can start implementing your
updates. Like any other `develop` branch, you can create `features/XY` sub-braches
to organize work and collaborate with others.<br/>
Finally when the updates have been approved, you need to syncronize also the
contents. Somethimes a Docusaurus update requires to update also the content files.
You can do it into the `develop` branch after merging the latest `main` branch.
Update the content files and merge the `develop` branche into the `main`.

**NB!:** Since you merged latest `main` commit into the `develop` branch (in order
to sync contents files), no content updates are allowed.
