import {useEffect} from 'react'
import BoardCard from './BoardCard'

const BoardContainer = ({user,boards,setBoards}) => {

  //get boards
      useEffect(() => {
      fetch("/boards")
        .then((r) => r.json())
        .then((boardsData) => setBoards(boardsData));
    }, [user]);

  return (
    <div className='BoardContainer'> 
      {boards &&
        boards.map((board) => (
          <BoardCard
            key={`board-${board.id}`}
            board={board}
            boards={boards}
            setBoards={setBoards}
          />
        ))}
  </div>
  )
}

export default BoardContainer