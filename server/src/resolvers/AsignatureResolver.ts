import {Resolver, Query, Mutation, Arg} from 'type-graphql';
import {Asignature} from '../entities/Asignature';
import { AppDataSource } from '../config/typeorm';
//importar objectid de mongodb
import { ObjectID } from 'typeorm';
@Resolver()
export class AsignatureResolver{
   
    @Mutation(()=>String)
    async createAsignature(
        @Arg("name") name: string ){
        const asignature = new Asignature();
        asignature.name = name;
        asignature.unit = [];
        await AppDataSource.manager.save(asignature); 
        return asignature._id.toString();
    }

    @Mutation(()=>Boolean)
    async DeleteAsignature(
        @Arg("id") id: string ){
        await AppDataSource.manager.delete(Asignature, id);
        return true;
    }
   
    @Query(()=>[Asignature])
    async getAsignature(
        @Arg("id") id: string ){
        const asignature = await AppDataSource.manager.findOneBy(Asignature, {
            _id: new ObjectID(id)
        })
        console.log(asignature);
        return asignature;
    }
}