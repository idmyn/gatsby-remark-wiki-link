# @idmyn/gatsby-remark-wiki-link

A thin wrapper over
[`remark-wiki-link`](https://github.com/landakram/remark-wiki-link) for use with
[Gatsby](https://github.com/gatsbyjs/gatsby).

## Installation

`npm install @idmyn/gatsby-remark-wiki-link`

## Usage

All options passed to this plugin are forwarded to remark-wiki-link. You can
view its supported configuration options
[here](https://github.com/landakram/remark-wiki-link#configuration-options).

``` javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [{
          resolve: "@idmyn/gatsby-remark-wiki-link",
          options: {
            pageResolver: (name) => [name.replace(/ /g, '-').toLowerCase()],
            hrefTemplate: (permalink) => `/${permalink}`
          }
        }],
      }
    },
  ],
};
```

## Backlinks

For backlinks, check out
[@idmyn/gatsby-remark-backlinks](https://github.com/idmyn/gatsby-remark-backlinks).
