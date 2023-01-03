class StockSerializer < ActiveModel::Serializer
  attributes :id, :stock_name, :ticker, :purchase_price, :share_amount, :user_id
  belongs_to :user
end
