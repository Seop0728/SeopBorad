import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from './entities/board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardEntity)
    private boradRepository: Repository<BoardEntity>,
  ) {}

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    return this.boradRepository.save({
      title,
      description,
    });
  }
}
