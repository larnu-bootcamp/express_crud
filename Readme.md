# express crud

Proyecto de prueba para comenzar a utilizar express + postgresql + sequelize

# migrations

Para crear las tablas en la base de datos se debe ejecutar el siguiente comando:

```bash
npx sequelize-cli db:migrate
```

# create a new migration 

```bash
npx sequelize-cli migration:create --name modify_users_add_new_fields
```

luego hay que modificar el archivo de migración que se crea en la carpeta migrations



# testing 

```bash
# para correr los cambios en el ambiente test
npx cross-env NODE_ENV=test npx sequelize-cli db:create
npx cross-env NODE_ENV=test npx sequelize-cli db:migrate
```


# comandos sequelize 
```bash
# crear base de datos
npx sequelize-cli db:create
# correr migraciones
npx sequelize-cli db:migrate
# eliminar todas las migraciones
npx sequelize-cli db:migrate:undo:all 
# para eliminar las migraciones hasta un punto
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXXX-create-room.js 
# crear modelos desde el cli
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string, email:string
```
