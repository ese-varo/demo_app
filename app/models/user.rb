class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :branches
  validates :first_name, :maiden_name, :last_name, :company, :rfc,
            presence: true
  validates :rfc, length: {
    in: 12..13,
    wrong_length: 'RFC should be 12/13 characters long'
  }, uniqueness: { case_sensitive: false }
end
