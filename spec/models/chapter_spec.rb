require 'rails_helper'

describe Chapter do
  it { should belong_to :book }
  it { should validate_presence_of :number }
end
