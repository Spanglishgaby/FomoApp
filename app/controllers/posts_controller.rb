class PostsController < ApplicationController
    skip_before_action :authorized_user, only: [:index,:show]

    def index
        render json: Post.all, status: :ok
    end

    def show 
        post = Post.find(params[:id])
        render json: post
    end

    def show_comments
        render json:  Post.find(params[:id]).comments
    end

    def create 
        post = Post.create(post_params)
        if post.valid?
            render json: post, status: :created 
        else 
            render json: post.errors.full_messages, status: :unprocessable_entity 
        end 
    end

    def update
        post = Post.find_by(id: params[:id])
        if post 
            post.update(post_params)
            render json:post
        else  
            render json: { errors: ["post does not exist"]}, status: :not_found 
        end
    end

    def destroy 
        post = post.find_by(id: params[:id])
        if post 
            post.destroy
            head :no_content 
        else  
            render json: "post does not exist", status: :not_found 
        end
    end

    private 

    def post_params 
        params.permit(:url, :post_content, :post_tag, :post_like, :post_save, :user_id, :post_id)
    end

end
