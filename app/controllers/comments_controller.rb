class CommentsController < ApplicationController
    skip_before_action :authorized_user, only: [:index]
    def index
        render json: Comment.all, status: :ok
    end

    def show
        render json: Comment.find(params[:id]), status: :ok
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
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end

    private

    def comment_params
        params.permit(:comment_content, :user_id, :post_id)
    end


end
