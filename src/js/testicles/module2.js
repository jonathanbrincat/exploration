var _ = require("lodash");

var data = [{
  "id": 1,
  "first_name": "Jennifer",
  "last_name": "Lewis",
  "email": "jlewis0@sfgate.com",
  "gender": "Female",
  "ip_address": "112.184.226.247"
}, {
  "id": 2,
  "first_name": "Janet",
  "last_name": "Stone",
  "email": "jstone1@shinystat.com",
  "gender": "Female",
  "ip_address": "230.4.54.12"
}, {
  "id": 3,
  "first_name": "Gary",
  "last_name": "Griffin",
  "email": "ggriffin2@hhs.gov",
  "gender": "Male",
  "ip_address": "211.38.24.23"
}, {
  "id": 4,
  "first_name": "Lawrence",
  "last_name": "Knight",
  "email": "lknight3@chronoengine.com",
  "gender": "Male",
  "ip_address": "12.3.170.93"
}];

var females = _.filter(data, {gender: "Female"}).length;

document.write("There are ", females, " females");

//module #2
document.write("module 2 stuff");
