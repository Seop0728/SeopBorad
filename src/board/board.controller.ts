import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
@Controller('/api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post('create')
  createBoard(@Body() createBoardDto: CreateBoardDto) {
    return this.boardService.createBoard(createBoardDto);
  }
}
