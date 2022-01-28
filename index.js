const wikiLinkPlugin = require('remark-wiki-link')

module.exports.setParserPlugins = options => {
  return [[wikiLinkPlugin, options]]
}
