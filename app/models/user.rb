class User < ApplicationRecord

    has_many :portfolios
    has_many :stocks, -> { distinct }, through: :portfolios
    has_many :posts
    has_many :comments
    has_one_attached :featured_image
    validates :username, presence: true, uniqueness: true
    has_secure_password

end
