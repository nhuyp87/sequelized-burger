module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Burger;
};


//Export module. 
module.exports = Burger;
