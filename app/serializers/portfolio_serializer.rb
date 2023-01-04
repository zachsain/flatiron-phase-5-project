class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :date

  belongs_to :user
  has_many :posts
  has_many :stocks
end
