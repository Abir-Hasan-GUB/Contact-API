const Contact = require('./Contact') // import contact model

exports.getAllContact = (req, res) => {
    Contact.find() // return a promise
        .then(contacts => {
            res.json(contacts)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: "Error Occured !"
            })
        })
}

exports.getSingleContact = (req, res) => {
    let { id } = req.params

    Contact.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(err => {
            console.log(err)
            res.json({
                message: "Error Occured !"
            })
        })
}

// Create a new Contact to database
exports.createContact = (req, res) => {
    let { name, phone, email } = req.body; // recived data form body
    // create contact object
    let contact = new Contact({
        name,
        phone,
        email
    })
    // console.log(contact)
    contact.save()
        .then(c => {
            res.json(c)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "Error Occured !"
            })
        })
}

exports.updateContact = (req, res) => {
    let { name, phone, email } = req.body; // recived data form body
    let { id } = req.params

    Contact.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                name,
                email,
                phone
            }
        }, {new: true})
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: "Error Occured !"
            })
        })
}

exports.deleteContact = (req, res) => {
    let {id} = req.params
    Contact.findOneAndDelete({_id: id})
    .then(contact =>{
        res.json({
            message: "Delete Successfully !"
        })
    })
    .catch(e=>{
        console.log(e)
        res.json({
            message: "Error Occured !"
        })
    })
}

