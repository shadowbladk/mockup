import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) { }
  create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  findAll() {
    return this.catModel.find();
  }

  findOne(ids: number) {
    return this.catModel.findOne({ id: ids })
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(name: string) {
    return this.catModel.deleteOne({ name: name });
  }
}
