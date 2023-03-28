import { Test, TestingModule } from '@nestjs/testing';
import { BoardController } from '../board.controller';
import { BoardService } from '../board.service';
import { Repository } from 'typeorm';
import { BoardEntity } from '../entities/board.entity';

describe('BoardController', () => {
  let controller: BoardController;
  let service: BoardService;
  let boardRepository: Repository<BoardEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BoardController],
      providers: [
        BoardService,
        {
          provide: 'BoardEntityRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<BoardController>(BoardController);
    service = module.get<BoardService>(BoardService);
    boardRepository = module.get<Repository<BoardEntity>>(
      'BoardEntityRepository',
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
