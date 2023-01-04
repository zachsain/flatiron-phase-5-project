class PortfoliosController < ApplicationController

    def index 
        portfolios = Portfolio.all
        render json: portfolios
    end 

    def create
        portfolio = Portfolio.create!(portfolio_params)
        render json: portfolio
    end 

    def update
        portfolio = Portfolio.find(params[:id])
        portfolio.update!(portfolio_params)
        render json: portfolio
    end 

    def destroy 
        portfolio = Portfolio.find(params[:id])
        portfolio.destroy  
        head :no_content
    end
    private

   def portfolio_params
        params.permit(:name, :description, :user_id, :date)
   end 
end
