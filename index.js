require('./config/db');
/*person prototype schema*/
let personSchema = new mongoose.Schema({
    name:
    {type:String,
    required:true},
    age:Number,
    favoriteFoods:[{
        type:String
    }]
  })
  /*creation of model*/
  let person = mongoose.model("person", personSchema)
  let person1 = new person({ 
      name: "Bob",
      age: 56,
      favoriteFoods:["steak", "burger", "beef"]
  })
/*error save*/
  person1.save((err) => {
    err
      ? console.log("error while saving", err)
      : console.log("saved successfully");
  });
  /*add new user*/
  person.create([
    {name: "John", age: 11, favoriteFoods: ["cake", "ice cream", "pop tarts", "sweets"]},
    { name: "Mary", age: 20, favoriteFoods: ["pizza", "calzone","burrito"]},
    { name: "luke", age: 18, favoriteFoods: ["fried chicken"]},
    { name: "Cloe", age: 33, favoriteFoods: ["salad", "quinoa", "rice"]},
  ]);
 /*find by name*/
  person.find({name:'luke'},function(err,data){
    if (err)
    console.log('error')
    else
  console.log(data)
  })
​
  /*Find one person which has a certain food in the person's favorites, using Model.findOne()*/
  person.findOne({favoriteFoods:["fried chicken"]},
function(err,data){
    if (err)
    console.log('error')
    else
  console.log(data)}); 

​
/*Find By Id*/
person.findById("5ff4ce08ea06ed44a0a04740", (err, person) => {    
    if (err) return res.send(err)
    return res.send(person)
});


/*Perform Classic Updates by Running Find, Edit, then Save*/
    person.findById("5ff4ce08ea06ed44a0a04740",(err,data)=>{
      if(err){
        console.log(err);
      }
      data.favoriteFoods.push("hamburger");
      data.save((err,data)=>{
        if(err){
          console.log(err);
        }
        done(null,data);
        console.log(data);
      });
    });
  
​
// ​Perform New Updates on a Document Using model.findOneAndUpdate()

const update=(personName)=>{
people.findOneAndUpdate({name:personName},{age:20},{ new: true },function(err,data){
    if (err)
    console.log('error')
    else
  console.log(data)})
  }
​
// ​Delete One Document Using model.findByIdAndRemove

 const remove=(personId)=>{
   people.findOneAndRemove((personId),function(err,data){
    if (err)
     console.log('error')
     else
   console.log(data)})
   }
​// Delete Many Documents with model.remove()
people.remove({name: "Mary"},function(err,data){
    if (err)
     console.log('error')
     else
   console.log(data)})

//Chain Search Query Helpers to Narrow Search Results

Person.find({ favoriteFoods: { $all: ["burrito"] } })
  .sort({ age: "asc" })
  .limit(4)
  .select({name:true})
  .exec((error, data) => {
    if (!error) {
      console.log(data);
    }
  });
​
