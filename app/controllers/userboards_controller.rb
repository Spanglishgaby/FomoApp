class UserboardsController < ApplicationController

    def index
        userboards = Userboard.all
        render json: userboards
    end
    
    def create 
        userboard = Userboard.create(usertab_params)
        if userboard.valid?
            session[:userboard_id] = userboard.id
            render json: userboard, status: :created 
        else 
            render json: { errors: userboard.errors.full_messages }, status: :unprocessable_entity 
        end 
    end

    private 

    def usertab_params 
        params.permit(:user_id, :board_id)
    end
end
