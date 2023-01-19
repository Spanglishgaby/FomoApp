class CommentsController < ApplicationController
    def index
        render json: Comment.all, status: :ok
    end

    def show
        render json: Comment.find(params[:id])
    end

    def create
        render json: Comment.create!(comment_params), status: :created
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        render json: comment
    end

    def destroy
        Comment.find(params[:id]).destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:description, :user_id, :post_id)
    end
end
