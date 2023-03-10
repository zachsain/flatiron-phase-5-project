class UsersController < ApplicationController

    before_action :authorize, only: [:show]

    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
    
    # def show
    #   current_user = User.find(session[:user_id])
    #   render json: current_user, include:
    #   [:portfolios => {:only => [:id, :name, :description, :user_id, :date]}, :stocks => {:only => [:id, :ticker, :purchase_price, :share_amount, :portfolio_id]}]
    # end 

    def show
        current_user = User.find(session[:user_id])
        render json: current_user, include: [:posts, :comments, :stocks, :portfolios => :stocks] 
      end 
  

    private
    def user_params
        params.permit(:username, :password, :email, :featured_image)
    end

    def authorize
        return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
      end

end
