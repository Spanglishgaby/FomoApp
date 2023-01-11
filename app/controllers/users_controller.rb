class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :show]
    def index
        render json: User.all, status: :ok
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else 
            render json: "Not authenticated", status: :unauthorized
        end 
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created 
        else 
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity 
        end 
    end

    # def update
    #     user = User.find_by(id: session[:user_id])
    #     user.update!(user_params)
    #     render json: user,serializer: UserInfoSerializer, status: :accepted
    #   end
    
    #   def destroy
    #     User.find(params[:id]).destroy
    #     render json: {}, status: :no_content
    #   end
    
    #   def showUser
    #     render json: User.find(params[:id]), status: :ok
    #   end
    private

    def user_params 
        params.permit(:name, :email, :password, :age, :location, :profile_photo)
    end
end
