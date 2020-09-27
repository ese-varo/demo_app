class Branch < ApplicationRecord
  belongs_to :user
  has_many :employees, dependent: :destroy
  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :street_number, :apartment_number, :zip_code,
            numericality: { only_integer: true }
  validates :zip_code, length: { is: 5 }
end
