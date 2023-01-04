class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :portfolio_id, :date
  belongs_to :user
  belongs_to :portfolio
end
