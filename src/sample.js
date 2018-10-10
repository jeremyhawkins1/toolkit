const menuItems = require ('../data/grammar.json');
let menus;
for(let _menu of menuItems.menuItems){
  ("Menu Name: "+_menu.title);
  print("Commands:");
  for (let _cmd of _menu.commands){
    print(_cmd.title);
  }
}