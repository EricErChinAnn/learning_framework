'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  return db.createTable("products", {
    //Each key will be 1 col, value will describe the property of the col
    "id": {
      type: "int",
      primaryKey: true,
      autoIncrement: true,
      unsigned: true
    },

    "name":{
      type:"string",
      length:225,
      notNull:true, // Must have
    },

    "cost":{
      type:"int",
      notNull:true,
      unsigned:true
    },

    "description":"text"
  })
};

exports.down = function (db) {
  return db.dropTable("products");
};

exports._meta = {
  "version": 1
};
