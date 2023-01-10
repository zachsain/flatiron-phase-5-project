class StockSerializer < ActiveModel::Serializer
  attributes :id, :stock_name, :ticker, :purchase_price, :share_amount, :portfolio_id
  
  # belongs_to :portfolio

end
