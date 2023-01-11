class PostsController < ApplicationController
    skip_before_action :authorized_user, only: [:index,:show]
    def index
        render json: Post.all, status: :ok
    end

    def show
        render json: Post.find(params[:id]), status: :ok
    end

    # def show_comments
    #     render json: Post.find(params[:id]).comments
    # end

    def create
        new_post = Post.create!(post_params)
        render json: new_post, status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private
    def post_params
        params.permit(:url, :post_content, :post_tag, :post_like, :post_save, :user_id)
    end
end
