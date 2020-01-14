module.exports = {
  client: {
    includes: ['./src/**/*.tsx'],
    excludes: ['node_modules/*'],
    tagName: 'gql',
    service: {
      name: 'Hilton Reservations',
      url: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev',
    },
  },
}
