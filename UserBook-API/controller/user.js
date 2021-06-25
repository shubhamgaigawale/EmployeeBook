const User = require("../model/User.js");

exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to find user with given id",
            });
        }
        req.user = user;
        next();
    });
};

exports.createUser = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "Not able to save user into datase.",
            });
        }
        res.json({ user });
    });
};

exports.getUser = (req, res) => {
    return res.json(req.user);
};

exports.getAllUSer = (req, res) => {
    User.find().exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: "Not user found",
            });
        }
        res.json(user);
    });
};


exports.updateUser = (req, res) => {
    const user = req.user;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.department = req.body.department;
    user.role = req.body.role;
    user.dateOfBirth = req.body.dateOfBirth;
    user.dateOfJoining = req.body.dateOfJoining;
    user.assignedProject = req.body.assignedProject;
    user.phoneNumber = req.body.phoneNumber;

    user.save((err, updatedUser) => {
        if (err) {
            return res.status(400).json({
                error: 'Not able to update user'
            })
        }
        res.json(updatedUser)
    })
}

exports.deleteUser = (req, res) => {
    const user = req.user;
    user.remove((err) => {
        if (err) {
            return res.status(400).json({
                error: 'Not able to delete user'
            })
        }
        res.json({
            message: 'User has been deleted.'
        })
    })
}