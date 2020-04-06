import axios from 'axios';
import { Request, Response } from 'express';

import Dev from '../models/Dev';

class DevController{

  async index(request:Request, response:Response){
    const devs = await Dev.find();
    return response.json(devs)
  }

  async store(request:Request, response:Response){
    let result;
    let statusCode = 200;
    const { loginGitHub, tecks, latitude, longitude } = request.body;
    const existDev = await Dev.exists({login_git_hub:loginGitHub});
    
    if(existDev){
      result = {message:"Usuario ja cadastrado"};
    }else{
      try {
        const res = await axios.get(`https://api.github.com/users/${loginGitHub}`);
        if(res && res.status === 200){
          const { name = loginGitHub, bio, avatar_url } = res.data;
          const location = {
            type:'Point',
            coordinates:[longitude, latitude]
          }
          result = await Dev.create({
            name,
            login_git_hub: loginGitHub,
            bio,
            avatar_url,
            tecks,
            location
          })
          statusCode = 201
        }
      } catch (error) {
        if(error && error.response && error.response.status === 404){
          result = {message:"Usuario do GitHub nao encontrado!!!"}
          statusCode = error.response.status
        }
      } 
    }

    return response.status(statusCode).json(result)
  }
}

export default new DevController;