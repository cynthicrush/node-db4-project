const sharedConfig = {
  client: 'sqlite3',
  migrations: { directory: './data/migrations'},
  seeds: { directory: './data/seeds' },
  useNullAsDefalt: true,
  pool: {afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)},
}

module.expoets = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/cook_book.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/cook_book.test.db3' },
  },
  production: {  }
}