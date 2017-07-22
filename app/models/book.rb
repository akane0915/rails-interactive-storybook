class Book < ActiveRecord::Base
  has_many :chapters
  
  validates :title, presence: true
end
