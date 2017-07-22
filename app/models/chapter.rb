class Chapter < ActiveRecord::Base
  belongs_to :book
  
  validates :number, presence: true
end
