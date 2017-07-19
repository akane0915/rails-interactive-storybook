class Chapter < ActiveRecord::Base
  validates :number, presence: true
end
