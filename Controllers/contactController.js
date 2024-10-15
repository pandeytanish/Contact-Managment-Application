//@desc Get all Contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all contacts" })
};

//@desc Create New Contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    res.status(201).json({ message: "Create contacts" })
};

//@desc Get Contacts
//@route GET /api/contacts
//@access public

const getContact = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` })
};

//@desc Update Contacts
//@route PUT /api/contacts
//@access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` })
};

//@desc Delete Contacts
//@route DELETE /api/contacts
//@access public

const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}` })
};

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}