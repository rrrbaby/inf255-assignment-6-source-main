/*
 * Animal Adoption Board API
 *
 */

// TODO 1: Import Express, create the app, and choose the port.
import express, { application } from "express";
const app = express();
const port = 3000;

// ------------------------------------
// Animal Data
// ------------------------------------

// The server owns the animals now. These are the same eight animals the
// board showed in Assignment 5. Don't change them.
const animals = [
	{
		id: 1,
		name: "Luna",
		species: "cat",
		age: 3,
		adopted: false,
		intakeDate: "2026-08-20",
	},
	{
		id: 2,
		name: "Biscuit",
		species: "dog",
		breed: "beagle",
		age: 7,
		adopted: true,
		intakeDate: "2026-06-02",
	},
	{
		id: 3,
		name: "Pepper",
		species: "cat",
		age: 1,
		adopted: true,
		intakeDate: "2026-07-15",
	},
	{
		id: 4,
		name: "Moose",
		species: "dog",
		breed: "labrador",
		age: 5,
		adopted: false,
		intakeDate: "2026-09-10",
	},
	{
		id: 5,
		name: "Charly",
		species: "dog",
		breed: "boxer",
		age: 4,
		adopted: false,
		intakeDate: "2026-09-28",
	},
	{
		id: 6,
		name: "Bill",
		species: "cat",
		age: 0.5,
		adopted: true,
		intakeDate: "2026-08-03",
	},
	{
		id: 7,
		name: "Chompers",
		species: "rabbit",
		age: 0.5,
		adopted: false,
		intakeDate: "2026-10-01",
	},
	{
		id: 8,
		name: "Beowulf",
		species: "dog",
		breed: "newfoundland",
		age: 7,
		adopted: true,
		intakeDate: "2026-05-11",
	},
];

// ------------------------------------
// Routes
// ------------------------------------

app.get("/", (req, res) => {
	res.json("Hello from server!")
});

// TODO 1: GET /api/animals sends every animal.

app.get("/api/animals", (req, res) => {
  res.json(animals);
});

// TODO 2: GET /api/animals/:id sends one animal, or a 404.
app.get("/api/animals/:id", (req, res) => {
const id = Number(req.params.id)
const animal = animals.find((a) => a.id === id);

if (animal === undefined) {
	res.status(404).json({ error: "Animal not found" })

}

else {
	res.json(animal)
}
});

// TODO 3: GET /api/available-animals and GET /api/adopted-animals

app.get("/api/available-animals", (res) => {
const available = animals.filter(function(animal) {
	return !animal.adopted
	})
res.json(available)})

app.get("/api/adopted-animals", (res) => {
const adopted = animals.filter(function(animal) {
	return animal.adopted
	}
)
res.json(adopted)})
// ------------------------------------
// Start the Server
// ------------------------------------

// TODO 1: Start listening on the port.

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});