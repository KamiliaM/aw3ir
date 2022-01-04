/*
store.js
Script pour gérer la liste de contact en JSON

Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
    // variable privée
    var contactList = [];

    // Expose these functions via an interface while hiding
    // the implementation of the module within the function() block

    return {
        add: function (_name, _firsname, _date, _adress, _mail) {
            var contact = {
                name: _name,
                prenom: _firsname,
                datenaissance: _date,
                adresse: _adress,
                mail: _mail,
            };
            // ajout du contact à la liste
            contactList.push(contact);
            for (var index in contactList) {


                console.log(contactList[index].name);
                console.log(contactList[index].prenom);
                console.log(contactList[index].datenaissance);
                console.log(contactList[index].adresse);
                console.log(contactList[index].mail);


                document.querySelector("table tbody").innerHTML =
                    document.querySelector("table tbody").innerHTML +
                    "<tr><td>" +
                    _name +
                    "</td><td>" +
                    _firsname +
                    "</td><td>" +
                    _date +
                    "</td><td> <a href>" +
                    _adress +
                    "</td><td> <a href>" +
                    _mail +
                    "</td><td>";
                return contactList;
            }

        },

        getList: function () {
            return contactList;
        },
    };
})();
