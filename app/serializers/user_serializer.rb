class UserSerializer < ActiveModel::Serializer

  include Rails.application.routes.url_helpers
  attributes :id, :username, :featured_image, :email
  
  has_many :portfolios
  has_many :stocks, through :portfolios
  has_many :posts
  has_many :comments

  def featured_image
    if object.featured_image.attached?
      {
        url: rails_blob_url(object.featured_image)
      }
    end
  end

end
