# Central Operations Platform (COP) product page

This repository contains a number of [components](#components) that renders GDS web elements.
They can be used to build/ maintain/ improve the COP product page which in result will render GOV.UK themed pages. Similar to [GOV.UK Pay], [GOV.UK
Notify] and [GOV.UK Registers].

![Screenshot of COP product page](screenshot.png)

This site is built in [Gatsby.js]() under the react framework which uses 'Hooks' to render each component that allows developers to inject components in to 'mdx' files.
MDX files are used for content. Developers may alter content by changing text, inline styling, adding and removing components imported in to the mdx files.

A minimum of Javascript/ React knowledge is required to develop and maintain this site for creating new components.
Changing content within the MDX content files only requires knowledge to import, remove components from mdx files and to have an understanding of 'props' and how some components may need text, images, list of any other types of content data injecting in to a component as a 'prop.' This allows each component to be reused in many areas of the site.

Information of React and JSX can be found [here.]()

## What are mdx files?

MDX files is a superset of Markdown files (.md) that allows developers to use jsx and html. This is an enhancement of markdown files which adds styling, logic and jsx written components in to the same file. In result, making it maintainable, reusable and reduces the limitation of a basic markdown file.
More information about mdx files can be found [here.]()

As an example, in this repository, you will be able to see an imported 'Paragraph' depending on what you are trying to achieve. 
e.g. Reusing the the GDS paragraph component and adding in text as a prop  `<Paragraph text={'Hello world'}/>` 

Or, adding in different inline custom styling and hyperlinks within a paragraph. `<p class="body-text">click <a class="link" href="[link]">here</a></p>`

## Styling
Styling has been imported from the GDS frontend tool kit which leads to the [AlphaGov](http://alphagov github.com) repository. In this repository, images, css was imported from the 'dist' files.
New styling classes added in for specific design purposes but does affect the styling of GDS components.

## Components

Link to each component to get an idea of how they are written in JSX

- [Break-line]()
- [Bullet-list]()
- [Button]()
- [Extra-large-title]()
- [Footer]()
- [Head]()
- [Header]()
- [Hr]()
- [Hyperlink]()
- [Image]()
- [Large-paragraph]()
- [Large-title]()
- [Logo]()
- [Medium-Title]()
- [Panel]()
- [Paragraph]()
- [Phase-banner]()
- [Stats-content]()
- [Sub-navigation]()

Please feel free to create new components if needed in the future.


## Running Example Locally

If you wish to run the example in your own browser, you'll need to run the
following commands from the root of this project: (Note: npm must be installed)

- `npm install -g gatsby-cli` to install Gatsby command line interface
- `npm install` to install react, gatsby and Matomo and the frontend dependencies
- `gatsby develop` - to start the development server (localhost:8000
- `gatsby build` - to build the static site
- `gatsby serve` - to start the server and view the static site (localhost:9000)

## Frontend Dependencies

[Gatsby.js](), [React](), [Matomo]() are included using [NPM] and bundled in
on build. You can include more [NPM] modules easily by installing them as a
dependency and including paths to them. 

Running `npm install` will install these packages as they are stated within the package.json.

[GOV.UK Frontend asset files]() has been imported manually.

### Matomo plugin
Matomo plugin is used in this site. By looking at the [gatsby-config.js]() file you will be able to change the config data within the matomo plugin.

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
[Jest]() -  used for unit testing
Run `npm test` to run the unit tests. All component spec files are in the `__test__` folder within the `component folder.`

[Nightwatch]() - used for end to end testing.