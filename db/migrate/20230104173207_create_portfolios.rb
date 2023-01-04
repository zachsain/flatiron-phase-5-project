class CreatePortfolios < ActiveRecord::Migration[6.1]
  def change
    create_table :portfolios do |t|
      t.string :name
      t.string :description
      t.string :user_id
      t.string :date
      t.timestamps
    end
  end
end
