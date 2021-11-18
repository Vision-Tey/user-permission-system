const ROLE ={
    ADMIN: 'admin',
    BASIC: 'basic'
}

module.exports = {
    ROLE: ROLE,
    users: [
        { id: 1, name: 'Agent', role: ROLE.ADMIN },
        { id: 2, name: 'Kupe', role: ROLE.BASIC },
        { id: 3, name: 'Sab', role: ROLE.BASIC }
    ],
    projects: [
        { id: 1, name: "Agent's Project", userId: 1 },
        { id: 2, name: "Kupe's Project", userId: 2 },
        { id: 3, name: "Sab's Project", userId: 3 }
      ]
}