db.createUser(
    {
        user: "root",
        pwd: "",
        roles: [
            {
                role: "readWrite",
                db: "sistema_educativo"
            }
        ]
    }
);