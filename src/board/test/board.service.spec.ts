import { Test, TestingModule } from '@nestjs/testing';
import { BoardService } from '../board.service';
import { BoardEntity } from '../entities/board.entity';
import { CreateBoardDto } from '../dto/create-board.dto';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BoardService', () => {
  let service: BoardService;
  let boardRepository: Repository<BoardEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BoardService,
        {
          provide: getRepositoryToken(BoardEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BoardService>(BoardService);
    boardRepository = module.get<Repository<BoardEntity>>(
      getRepositoryToken(BoardEntity),
    );
  });

  describe('createBoard', () => {
    it('should create a new board', async () => {
      const board = new BoardEntity();
      board.title = 'Test Board';
      board.description = 'This is a test board';

      const createBoardDto: CreateBoardDto = {
        title: board.title,
        description: board.description,
      };

      jest.spyOn(boardRepository, 'save').mockResolvedValue(board);

      const createdBoard = await service.createBoard(createBoardDto);

      expect(createdBoard).toEqual(board);
    });
  });
});
