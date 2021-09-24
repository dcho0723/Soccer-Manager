class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :dob
      t.string :club
      t.string :country
      t.string :image
      t.string :name
      t.integer :rating
      t.string :number
      t.string :position
      t.integer :pace
      t.integer :shot
      t.integer :pass
      t.integer :dribble
      t.integer :defence
      t.integer :physical
      t.boolean :bench

      t.timestamps
    end
  end
end
