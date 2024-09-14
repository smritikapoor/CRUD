router.post('/updateContact', (req, res) => {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;
  
    if (data_store === 'CRM') {
      // Update contact in FreshSales CRM
      const apiEndpoint = `https://urstechsolution.myfreshworks.com/api/contacts/${contact_id}`;
      const data = {
        'contact': {
          'email': new_email,
          'mobile_number': new_mobile_number
        }
      };
  
      freshsales.patch(apiEndpoint, data)
        .then(response => {
          res.json({ message: 'Contact updated successfully in CRM' });
        })
        .catch(error => {
          res.status(500).json({ message: 'Error updating contact in CRM' });
        });
    } else if (data_store === 'DATABASE') {
      // Update contact in MySQL database
      const query = `UPDATE contacts SET email = ?, mobile_number = ? WHERE id = ?`;
      mysql.query(query, [new_email, new_mobile_number, contact_id], (err, results) => {
        if (err) {
          res.status(500).json({ message: 'Error updating contact in database' });
        } else {
          res.json({ message: 'Contact updated successfully in database' });
        }
      });
    } else {
      res.status(400).json({ message: 'Invalid data_store parameter' });
    }
  });