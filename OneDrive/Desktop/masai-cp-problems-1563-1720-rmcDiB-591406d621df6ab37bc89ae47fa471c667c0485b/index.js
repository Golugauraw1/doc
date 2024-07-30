// export server
// module.exports = app
const express = require('express');
const os = require('os');
const dns = require('dns');
const fs = require('fs');

const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1>');
});

// Add a new student
app.post('/add/student', (req, res) => {
  const uid = os.userInfo().uid;
  const username = os.userInfo().username;

  // Get data from request body
  const { age, location, tickets } = req.body;

  // Generate ticket_id, title, and body
  const ticketId = Math.floor(Math.random() * 1000);
  const title = 'Random Ticket Title';
  const body = 'Random Ticket Body';

  // Create a new student object
  const newStudent = {
    id: uid,
    name: username,
    age,
    location,
    tickets: [{ ticket_id: ticketId, title, body }],
  };

  // Read existing students data from db.json
  const studentsData = JSON.parse(fs.readFileSync('db.json'));

  // Add the new student to the data
  studentsData.students.push(newStudent);

  // Update db.json with the new data
  fs.writeFileSync('db.json', JSON.stringify(studentsData));

  // Send the response with the updated students details
  res.json(studentsData);
});

// Add a new instructor
app.post('/add/instructor', (req, res) => {
  const uid = os.userInfo().uid;
  const username = os.userInfo().username;

  // Get data from request body
  const { age, location, sub, exp } = req.body;

  // Create a new instructor object
  const newInstructor = {
    id: uid,
    name: username,
    age,
    location,
    sub,
    exp,
  };

  // Read existing instructors data from db.json
  const instructorsData = JSON.parse(fs.readFileSync('db.json'));

  // Add the new instructor to the data
  instructorsData.instructors.push(newInstructor);

  // Update db.json with the new data
  fs.writeFileSync('db.json', JSON.stringify(instructorsData));

  // Send the response with the updated instructors details
  res.json(instructorsData);
});

// Get all students
app.get('/students', (req, res) => {
  try {
    // Read students data from db.json
    const studentsData = JSON.parse(fs.readFileSync('db.json'));

    // Send the students data as the response
    res.json(studentsData.students);
  } catch (err) {
    // Send the error as the response
    res.status(500).send(err);
  }
});

// Get all instructors
app.get('/instructors', (req, res) => {
  try {
    // Read instructors data from db.json
    const instructorsData = JSON.parse(fs.readFileSync('db.json'));

    // Send the instructors data as the response
    res.json(instructorsData.instructors);
  } catch (err) {
    // Send the error as the response
    res.status(500).send(err);
  }
});

// Get the total number of tickets
app.get('/tickets', (req, res) => {
    try {
      // Read students data from db.json
      const studentsData = JSON.parse(fs.readFileSync('db.json'));
  
      // Count the total number of tickets
      let totalTickets = 0;
      studentsData.students.forEach((student) => {
        totalTickets += student.tickets.length;
      });
  
      // Send the total number of tickets as the response
      res.send(`Total number of tickets in the system are ${totalTickets}`);
    } catch (err) {
      // Send the error as the response
      res.status(500).send(err);
    }
  });

  // Get IP address and family of masaischool.com
app.get('/address', (req, res) => {
    dns.lookup('masaischool.com', (err, address, family) => {
      if (err) {
        // Send the error as the response
        res.status(500).send(err);
      } else {
        // Send the response with the IP address and family
        res.send(`URL: masaischool.com IP Address: ${address} Family: ${family}`);
      }
    });
  });
  