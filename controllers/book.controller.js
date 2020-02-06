const Book = require('../models/book.model.js');

exports.list = function (req, res) {
    Book.find({}).exec(function (err, bookresult) {
      if (err) {
        return res.json({success: false, msg: 'Books Not Found'});
      }
      else {
        res.json({success: true, msg: 'Successfull', bookresult});
      }
    });
};


exports.show = function (req, res) {
    Book.findOne({_id: req.params.id}).exec(function (err, bookresult) {
      if (err) {
        return res.json({success: false, msg: 'Books Detail Not Available'});
      }
      else {
        res.json({success: true, msg: 'Successfull', bookresult});
      }
    });
};

exports.save = function(req, res) {
    var book = new Book(req.body);
    book.save(function(err, bookresult) {
      if(err) {
        return res.json({success: false, msg: 'Book Saving Failed'});
      } else {
       res.json({success: true, msg: 'Successfull', bookresult});
      }
    });
};


exports.update = function(req, res) {
    Book.findByIdAndUpdate(req.params.id,{ $set: { isbn: req.body.isbn, title: req.body.title, author: req.body.author, description: req.body.description, published_year: req.body.published_year, publisher: req.body.publisher}}, { new: true }, function (err, bookresult) {
      if (err) {
        return res.json({success: false, msg: 'Book Updating Failed'});
      }else{
        res.json({success: true, msg: 'Successfull', bookresult});
      }
    });
};

exports.delete = function(req, res) {
    Book.findByIdAndRemove({_id: req.params.id}, function(err, bookresult) {
      if(err) {
        return res.json({success: false, msg: 'Book Deleting Failed'});
      }
      else {
        res.json({success: true, msg: 'Successfull', bookresult});
      }
    });
};
