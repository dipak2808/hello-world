const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connection successful')
    const Person = mongoose.model("Person");
    // var createAndSavePerson = function (done) {
    //     var janeFonda = new Person({ name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] });
    //     janeFonda.save(function (err, data) {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             console.log(data)
    //         }
    //     })
    // }
    // createAndSavePerson()
    // const arrayOfPeople = [{ name: "jan", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] },
    // { name: "Sub ", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] },
    // { name: "Jane", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] },
    // { name: "dad", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] }]
    // const createAndSavePerson = function (arrayOfPeople, done) {
    //     Person.create(arrayOfPeople, function (err, data) {
    //         if (err) throw err;
    //         console.log(data)
          
    //     })
    // }
//   createAndSavePerson(arrayOfPeople)
//   const findEditSave = async function (personId,done) {
//     const footToAdd = "humBurger"
//    const person = await Person.find({})
//    console.log(person);
//     person.favoriteFoods.push(footToAdd);
// }
// findEditSave("632bfc93645a1f3f3b173ede")
// }).catch((err) => {
//     console.log(err)
});