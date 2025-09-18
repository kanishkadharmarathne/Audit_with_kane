// const express = require('express');
// const app = express();
// app.use(express.json());

// // Blog endpoints
// app.post('/api/blogs', async (req, res) => {
// 	try {
// 		const blog = new Blog(req.body);
// 		await blog.save();
// 		res.status(201).json(blog);
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// });
// app.get('/api/blogs', async (req, res) => {
// 	const blogs = await Blog.find();
// 	res.json(blogs);
// });

// // Service endpoints
// app.post('/api/services', async (req, res) => {
// 	try {
// 		const service = new Service(req.body);
// 		await service.save();
// 		res.status(201).json(service);
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// });
// app.get('/api/services', async (req, res) => {
// 	const services = await Service.find();
// 	res.json(services);
// });

// // Client endpoints
// app.post('/api/clients', async (req, res) => {
// 	try {
// 		const client = new Client(req.body);
// 		await client.save();
// 		res.status(201).json(client);
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// });
// app.get('/api/clients', async (req, res) => {
// 	const clients = await Client.find();
// 	res.json(clients);
// });

// // Contact endpoints
// app.post('/api/contacts', async (req, res) => {
// 	try {
// 		const contact = new Contact(req.body);
// 		await contact.save();
// 		res.status(201).json(contact);
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// });
// app.get('/api/contacts', async (req, res) => {
// 	const contacts = await Contact.find();
// 	res.json(contacts);
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kanishkadewinda1102_db_user:D3Rq2sbxoIzP0XQu@clusteraudit.4wtvyi9.mongodb.net/auditdb?retryWrites=true&w=majority&appName=ClusterAudit', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// Blog model
const blogSchema = new mongoose.Schema({
	title: String,
	content: String,
	author: String,
	date: { type: Date, default: Date.now }
});
const Blog = mongoose.model('Blog', blogSchema);

// // Service model
// const serviceSchema = new mongoose.Schema({
// 	name: String,
// 	description: String,
// });
// const Service = mongoose.model('Service', serviceSchema);

// // Client model
// const clientSchema = new mongoose.Schema({
// 	name: String,
// 	testimonial: String,
// 	company: String,
// });
// const Client = mongoose.model('Client', clientSchema);

// // Contact model
// const contactSchema = new mongoose.Schema({
// 	name: String,
// 	email: String,
// 	message: String,
// 	date: { type: Date, default: Date.now }
// });
// const Contact = mongoose.model('Contact', contactSchema);