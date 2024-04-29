import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  avatarName: String,
  deviceType: String,
  packages:Array,
  currentCity:String,
	currentCountry:String,
	currentState:String,
	activityLedger:Array
},{ _id: false }, { versionKey: false });

const peopleSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  mobile: Number ,
  birthMonth: String,
  homeCity:String,
  homeCountry:String,
  homeState:String,
  favoriteColor: String,
  birthYear:String,
  age: Number,
  loves:Array,
  wishList:Array,
  sex: String,
  bloodType:String,
  occupation: String,
  user:userSchema,
  memories:Array,
  mothersMaidenName: String,
  email: String,
},{ versionKey: false });

var People = mongoose.model("people", peopleSchema,"People");

export default People;
