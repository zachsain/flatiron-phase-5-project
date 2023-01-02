class User < ApplicationRecord
    has_one_attached :featured_image
    validates :username, presence: true, uniqueness: true

    has_secure_password
end
