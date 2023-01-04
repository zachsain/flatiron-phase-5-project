class StockSerializer < ActiveModel::Serializer
  attributes :id, :stock_name, :ticker, :purchase_price, :share_amount
  
  belongs_to :portfolio

end
