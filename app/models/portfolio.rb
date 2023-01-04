class Portfolio < ApplicationRecord
    belongs_to :user
    has_many :posts
    has_many :stocks
end
