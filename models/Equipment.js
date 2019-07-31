const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  title: String,
  image: String,
  description: String,
  status: String,
  price: String,
  owner: String,
  renter: String,

}, { timestamps: true });

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
