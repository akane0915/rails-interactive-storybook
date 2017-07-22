require 'rails_helper'

describe Book do
  it { should have_many :chapters }
  it { should validate_presence_of :title }
end
