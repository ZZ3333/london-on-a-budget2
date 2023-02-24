const User = require("../models/users");

const UsersController = {
  Create: (req, res) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "User created successfully" });
      }
    });
  },

  Find: async (req, res) => {
    const email = req.query.email;
    User.findOne({ email: email }, (err, user) => {
      if (err) {
        res.status(500).json({ message: "Error finding the right user" });
      } else if (!user) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(201).json({ user });
      }
    });
  },
};
//     try {
//       const user = await User.findUser{(email: email)};
//       if (!user) {
//         return res.status(404).json({ message: `User not found` });
//       }
//       res.json(user);
//       return res.status(200).json({ message: "User found successfully" });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ message: "Error finding user" });
//     }
//   },
// };

module.exports = UsersController;
