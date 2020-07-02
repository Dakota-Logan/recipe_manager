import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class UserService {
	async login (data) {
	
	}
	
	async register (data) {
	
	}
	
	async delete (id) {
	
	}
	
	async update (id, updatedData) {
	
	}
}

const service = new UserService();
export default service;