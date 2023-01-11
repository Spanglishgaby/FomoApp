class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:create]

    def create
        user = User.find_by(email: params[:email])
        if user&&user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else 
            render json: { errors: ["Invalid Credentials. Try again!"]}, status: :unauthorized 
        end
    end
    
    def destroy
        # return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
        session.delete :user_id
        head :no_content
    end

end
