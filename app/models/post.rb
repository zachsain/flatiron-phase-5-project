class Post < ApplicationRecord
    belongs_to :user
    belongs_to :portfolio 
    has_many :comments
end
