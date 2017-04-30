var express = require('express');
var router = express.Router();

var myProfile = {
  firstName: "Sokna",
  lastName: "Ly",
  profileImage: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/15135784_1266134856786555_8174429099942269215_n.jpg?oh=5bea90ee784266afc6f8fc177e0f1711&oe=59855D7F",
  position: "Senior Software Engineer, iOS",
  company: "DMI"
};

var friends = [
  {
    id: 1,
    firstName: "Sophany",
    lastName: "Kong",
    profileImage: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-1/p100x100/14670895_1801583126790810_550727254668999961_n.jpg?oh=70405d10caf1738655991da93f63b312&oe=5978E74D"
  },
  {
    id: 2,
    firstName: "Павел",
    lastName: "Федоров",
    profileImage: "https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-1/p100x100/14670895_1801583126790810_550727254668999961_n.jpg?oh=70405d10caf1738655991da93f63b312&oe=5978E74D"
  }
];

router.get('/profile/me', function(req, res) {
  res.json(myProfile);
});

router.post('/profile/me', function(req, res) {
  myProfile.firstName = req.body.firstName;
  myProfile.lastName = req.body.lastName;
  myProfile.profileImage = req.body.profileImage;
  myProfile.position = req.body.position;
  myProfile.company = req.body.company;
  res.json(myProfile);
});

router.get('/friends', function(req, res) {
  res.json(friends);
});

router.get('/friends/confirm', function(req, res) {
  var friend = {
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    profileImage: req.body.profileImage
  };
  friends.push(friend);
  res.json({
    message: "Confirm friend successfully"
  });
});

router.delete('/friends/:friend_id', function(req, res) {
  friends.forEach(function(friend, index) {
    if (friend.id == req.params.friend_id) {
      friends.splice(index, 1);
      return false;
    }
  });
  res.json(friends);
});



module.exports = router;
