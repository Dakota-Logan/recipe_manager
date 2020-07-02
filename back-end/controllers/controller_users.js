// import express from "express";
// import BugService from "../services/"
// import NoteService from "../services/NoteService"

export default class UserController {
	constructor() {
		this.router = express
			.Router()
			.get("", this.getAll)
			.get("/:id", this.getId)
			.get("/:id/notes", this.getIdNotes)
			.post("", this.create)
			.delete("/:id", this.delete)
			.put("/:id", this.update);
	}
	
	async getAll (req, res, next) {
		try {
			let data = await BugService.getAll();
			return res.send(data);
		} catch (error) {
			next(error);
			
		}
	}
	
	async getId (req, res, next) {
		try {
			let data = await BugService.getId(req.params.id);
			return res.send(data);
		} catch (e) {
			next(e);
		}
	}
	
	async getIdNotes (req, res, next) {
		try {
			let data = await NoteService.getId(req.params.id);
			return res.send(data);
		} catch (e) {
			next(e);
		}
	}
	
	async create (req, res, next) {
		try {
			let data = await BugService.create(req.body);
			return res.send(data);
		} catch (e) {
			next(e);
		}
	}
	
	async delete (req, res, next) {
		try {
			console.log('Before Delete Operation: '+req.params.id);
			let returnData = await BugService.delete(req.params.id);
			console.log(`After Deletion - ${req.params.id}:`, returnData);
			return res.send(returnData)
		} catch (e) {
			next(e);
		}
	}
	
	async update (req, res, next) {
		try {
			let returnData = await BugService.update(req.params.id, req.body);
			if (returnData instanceof Error) {
				return res.status(400).send({status:400, message: "Cannot edit closed bug."});
			}
			return res.send(returnData);
		} catch (e) {
			next(e)
		}
	}
}