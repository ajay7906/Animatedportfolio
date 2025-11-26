require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Adjust the path as necessary
const connetToDB = require('./config/db'); // Adjust the path as necessary

async function seedAdmin() {
    try {
        await connetToDB();
        const existingAdmin = await User.findOne({email: 'aks969014@gmail.com'});
        if (existingAdmin) {
            console.log('Admin user already exists. Exiting.');
            await mongoose.disconnect();
            process.exit(0);
        }
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash('Admin@123', salt);
        const adminUser = new User({
         
            email: 'aks969014@gmail.com',
            password: 'Admin@123',
            role: 'admin'
        });
        await adminUser.save();
        console.log('Admin user created successfully.');
        await mongoose.disconnect();
        process.exit(0);
        
    } catch (error) {
        console.error('Error seeding admin user:', error);
        await mongoose.disconnect();
        process.exit(1);
        
    }
}

seedAdmin().catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
} )