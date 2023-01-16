class BoardsController < ApplicationController

    def index
        boards = current_user.boards
        render json: boards
    end

    def show 
        board = Board.find(params[:id])
        render json: board
    end

    def create 
        board = Board.create(board_params)
        if board.valid?
            render json: board, status: :created 
        else 
            render json: board.errors.full_messages, status: :unprocessable_entity 
        end 
    end

    def update
        board = Board.find_by(id: params[:id])
        if board 
            board.update(board_params)
            render json:board
        else  
            render json: { errors: ["board does not exist"]}, status: :not_found 
        end
    end

    def destroy 
        board = Board.find_by(id: params[:id])
        if board 
            board.destroy
            head :no_content 
        else  
            render json: { errors: ["board does not exist"]}, status: :not_found 
        end
    end

    private 

    def board_params 
        params.permit(:title, :color, :favorite)
    end
end
