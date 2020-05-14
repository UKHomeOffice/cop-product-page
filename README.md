# Central Operations Platform (COP) Product Page

This repository contains a number of [components](#components) that renders GDS web elements.
They can be used to build, maintain and improve the COP product page which in result will render GOV.UK themed pages. Similar to [GOV.UK Pay], [GOV.UK
Notify] and [GOV.UK Registers].

![Screenshot of COP product page](screenshot.png) 

This site is built in [Gatsby.js] under the react framework, which uses 'Hooks' to render each component and allows developers to inject them in to templates and 'mdx' files.
MDX files are used for content; developers may change content styling or structure by importing or removing components.

In order to develop and maintain components, a minimum of Javascript/ React knowledge is required. As for changing content, a developer will only need to edit content using plain text, writing light HTML for inline styling/ structure or importing components and adding text as a prop.

Within the repository there are [templates](src/templates) created using HTML and content injected in using GraphQl. 

Information of React and JSX can be found [here.](https://reactjs.org/docs/introducing-jsx.html)

## What are mdx files?

MDX files (.mdx) is a superset of Markdown files (.md) that enables developers to use JSX and HTML. 
This allows developers to add styling, logic and jsx written components into the same file. In result, making it maintainable, reusable and reduces the limitation of a basic markdown file.
More information about mdx files can be found [here.](https://mdxjs.com/getting-started)

Developers can still create .md files but this reduces the flexibility on structure and styling. MDX files also supports normal markdown syntax.

As an example, in this repository, you will be able to see an imported 'Bullet point list.'

```html
<BulletList list={['List 1', 'list 2']}/>
```

![Screenshot of GDS List](list.png)

Note that `list` is a prop of type array of strings. This will render the list as shown above.

You may wish to use HTML instead of the component above but it is recommended to use these components to reduce code and make content pages readable and maintainable.

## Styling
Styling has been imported from the GDS frontend tool kit which leads to the [AlphaGov] repository.
New styling classes have also been added in for specific layout purposes or for custom elements.

Styling classes can be found in [layout.scss.](src/components/layout.scss)

## Components

Link to each component to get an idea of how they are written in JSX

- [Break-line](src/components/Break-line.js)
- [Bullet-list](src/components/bullet-list.js)
- [Button](src/components/button.js)
- [Extra-large-title](src/components/extra-large-title.js)
- [Footer](src/components/footer.js)
- [Head](src/components/head.js)
- [Header](src/components/header.js)
- [Hr](src/components/hr.js)
- [Hyperlink](src/components/hyperlink.js)
- [Image](src/components/image.js)
- [Large-paragraph](src/components/large-paragraph.js)
- [Large-title](src/components/large-title.js)
- [Logo](src/components/logo.js)
- [Medium-Title](src/components/MediumTitle.js)
- [Panel](src/components/panel.js)
- [Paragraph](src/components/paragraph.js)
- [Phase-banner](src/components/phase-banner.js)
- [Stats-content](src/components/stats-content.js)
- [Sub-Panel](src/components/sub-panel.js)
- [Sub-navigation](src/components/sub_navigation.js)
- [Video](src/components/video.js)

Please feel free to create new components if needed in the future.

## Layout

[Layout](src/components/layout.js) component displays the top hierarchy structure of the Gastby static app.

Below you will see a:
 
[Head](src/components/head.js) component which includes the traditional head metadata, favicon and style and script links.

[Header](src/components/header.js) component displays the banner with navigational links.

'{children}' is the mdx page output which displays above the [footer](src/components/footer.js) component.

```javascript
    const Layout = ({ children }) => (
      <>
        <Head/>
        <Header/>
        {children}
        <Footer/>
      </>
    );
```

## Running Example Locally

If you wish to run the example in your own browser, you'll need to run the
following commands from the root of this project: 

Note: [NPM] must be installed

- `npm install -g gatsby-cli` to install Gatsby command line interface
- `npm install` to install react, gatsby and Matomo and the frontend dependencies
- `gatsby develop` - to start the development server (localhost:8000)
- `gatsby build` - to build the static site
- `gatsby serve` - to start the server and view the static site (localhost:9000)

## Frontend Dependencies

[Gatsby.js], [React], [Matomo] and [Matomo Gatsby Plugin] are included using [NPM] and bundled in
on build. You can include more [NPM] modules easily by installing them as a
dependency and including paths to them. 

Running `npm install` will install these packages as they are stated within the [package.json.](package.json)

[GOV.UK Frontend] asset files has been imported manually.

### MDX plugin
MDX plugin is used in this site. By looking at the [gatsby-config.js](gatsby-config.js) file you will be able to see configurations of this plugin.

```javascript
{
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"]...
```

### Matomo plugin
Matomo plugin is used in this site. By looking at the [gatsby-config.js](gatsby-config.js) file you will be able to change the config data within the matomo plugin.

```javascript
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '[SITEID]',
        matomoUrl: '[MATOMO URL',
        siteUrl: '[SITE URL]'
      }
    }
```

Any changes made in this file would require you to run `gatsby develop` or `gatsby build & gatsby serve`

### Testing
[Jest] -  used for unit testing.

Run `npm test` to run the unit tests. All component spec files are in the `__test__` folder within the `component folder.`
This can be found [here.](src/components/__tests__)

To run the test, simply run `npm test` command.
To run the test after changing html code, 

run `npm install -- -u` to update the snapshots.

[Nightwatch] - used for end to end testing. Page objects, variables and test specs can be found in the `Nightwatch` folder within the `root.`
This can be found [here.](nightwatch)


Run `nightwatch -e [BROWSER] nightwatch/test_spec.js` to run the Nightwatch tests.


[GOV.UK Pay]: https://www.payments.service.gov.uk/
[GOV.UK Notify]: https://www.notifications.service.gov.uk/
[GOV.UK Registers]: https://registers.cloudapps.digital/
[GOV.UK Frontend]: https://github.com/alphagov/govuk-frontend/tree/master/dist
[NPM]: https://npmjs.com
[Jest]: https://jestjs.io/docs/en/getting-started
[Nightwatch]: https://nightwatchjs.org/gettingstarted
[AlphaGov]: https://github.com/alphagov/govuk-frontend/
[Gatsby.js]: https://www.gatsbyjs.org/docs/
[React]: https://reactjs.org/docs/getting-started.html
[Matomo]: https://developer.matomo.org/
[Matomo Gatsby Plugin]: https://www.gatsbyjs.org/packages/gatsby-source-matomo/