class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :post_id, :user_id, :date

  belongs_to :user
  belongs_to :post
end
