import { Request, Response } from 'express';

import Dev from '../models/Dev';

class SearchController{
  async index(request:Request, response:Response){
    const {tecks, latitude, longitude} = request.body;

    const location = {
      $near: {
        $geometry: {
           type: "Point" ,
           coordinates: [ longitude, latitude ]
        },
        $maxDistance: 10000
      }
    }

    const devs = await Dev.find({
      tecks:{$in: tecks},
      location
    })

    return response.json(devs)
  }

}

export default new SearchController;