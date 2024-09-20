w pliku env ustaw zmienne:
PORT="<"dowolny">"
DB_URI=mongodb+srv://"<"username">":"<"password">"@cluster0.mongodb.net/"<"database">"

uruchamienie aplikacji:

npm run start:dev

przy starcie aplikacji kategorie zostaną dodane do bazy danych, jeśli jeszcze ich nie ma.

mozna je aktualizowac poprzez dodanie nowych do pliku utils/initCategories.js
