1. Set up BackEnd:
- cd ./backend
- npm i
- npm run dev

2. Set up FrontEnd:
- cd ./frontend:
- npm i
- npm run dev


Note: As I do not have full-blown backend for now, especially auth feature. I use some kind of a single hardcoded user as a main one, so you have to have a user with id 1 in model User to run the app smoothly.
User with id 1 already exists in database.sqlite that stored in this repo but in case you want to delete/rebuild database.sqlite file or some tables from db, the info "note" above is for you.

P.S: I've chosen Feature Sliced Design patern for project architecture, but came across some problem with understanding it, so the structure of the project might be a little messy.
Most of the components are just stored in shared folder