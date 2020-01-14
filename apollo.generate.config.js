module.exports = {
  client: {
    includes: ['./src/**/*.{ts,tsx}'],
    excludes: ['node_modules/*'],
    tagName: 'gql',
    service: {
      name: 'Hilton Reservations',
      localSchemaFile: ['./src/store/schema.graphql', './src/store/clientState.graphql'],
    },
  },
}
