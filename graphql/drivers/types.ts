

export const DriverTypes = `
    # A Drivest driver
    type Driver {
        id: ID!
        firstname: String!
        lastname: String!
        driverType: String!
        email: String!
        phone: String!

    }
    type Query {
        drivers(id: String!): [Driver]
    }
`