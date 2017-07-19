require 'rails_helper'

describe Chapter do
  it { should validate_presence_of :number }
end
