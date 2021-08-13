# node_sequelize_migrations_express

--> This project is created for the learn how to manage relationship in sequelize .

# Local Database
    
    --> MySql

# Implemented Concepts of Sequelize.

    --> implement relationship between two table 
       
       - One-To-One
            - ex : One user can only one order.

       - One-To-Many 
            - ex : One user can multiple orders.

       - Many-To-Many 
            - ex : Order has many payment methods && payment methods has many Orders

# Sequelize-CLI (Commands)

    --> npm install --save-dev sequelize-cli
    --> npx sequelize-cli init
    --> npx sequelize-cli model:generate --name [name of model]   attributes [fieldname:datatype]
    --> npx sequelize-cli db:migrate
    --> npx sequelize-cli db:migrate:undo

    # for specific migrate 
        - npx sequelize-cli db:migrate --to [name of migration] --

    # for specific migrate:undo 
        - npx sequelize-cli db:migrate --name [name of migration]

    --> npx sequelize-cli seed:generate --name demo-user
    --> npx sequelize-cli db:seed:all
    --> npx sequelize-cli db:seed:undo

    # for undo specific seed:undo 
        - npx sequelize-cli db:seed:undo --seed [name of seed]

    --> npx sequelize-cli db:seed:undo:all

# Sequelize Docs Link : https://sequelize.org/master/manual/migrations.html