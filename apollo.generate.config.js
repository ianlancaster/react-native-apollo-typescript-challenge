module.exports = {
  client: {
    includes: ['./src/**/*.tsx'],
    excludes: ['node_modules/*'],
    tagName: 'gql',
    service: {
      name: 'Hilton Reservations',
      localSchemaFile: ['./src/store/schema.graphql', './src/store/clientState.graphql'],
    },
  },
}
