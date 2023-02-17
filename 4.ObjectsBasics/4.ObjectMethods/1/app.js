function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
//Это потому, что правила, которые определяют значение this, никак не смотрят на объявление объекта. Важен лишь момент вызова.