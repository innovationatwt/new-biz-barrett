import express from "express";
import mongoose from "mongoose";
import People from "../models/peopleModel.js";

const router = express.Router();

export const getPeople = async (req, res) => {
  try {
    const people = await People.find();

    res.status(200).json(people);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPeople = async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    birthDate,
    homeCity,
    homeState,
    homeCountry,
    favoriteColor,
    age,
    sex,
    bloodType,
    occupation,
    email,
    mothersMaidenName,
    avatarName,
    deviceType,
  } = req.body;

  const newPeople = new People({
    firstName: firstName,
    lastName: lastName,
    mobile: phoneNumber,
    birthMonth: birthDate?.slice(5, 7),
    homeCity: homeCity,
    homeCountry: homeCountry,
    homeState: homeState,
    favoriteColor: favoriteColor,
    birthYear: birthDate?.slice(0, 4),
    age: Number(age),
    loves: [],
    wishList: [],
    bloodType: bloodType,
    sex: sex,
    occupation: occupation,
    user: {
      avatarName: avatarName,
      deviceType: deviceType,
      packages: ["FREEMIUM"],
      currentCity: "",
      currentCountry: "",
      currentState: "",
      activityLedger: [],
    },
    memories: [],
    mothersMaidenName: mothersMaidenName,
    email: email,
  });

  try {
    await newPeople.save();

    res.status(201).json(newPeople);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePeople = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await People.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export default router;
