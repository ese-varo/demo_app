class Employee < ApplicationRecord
  belongs_to :branch
  validates :first_name, :maiden_name, :last_name, :rfc, :branch, presence: true
  validates :rfc, length: {
    in: 12..13,
    wrong_length: 'RFC should be 12/13 characters long'
  }, uniqueness: { case_sensitive: false }
end
