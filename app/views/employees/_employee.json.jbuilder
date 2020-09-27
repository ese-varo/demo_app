json.extract! employee, :id, :first_name, :maiden_name, :last_name, :rfc, :position, :branch, :branch_id, :created_at, :updated_at
json.url employee_url(employee, format: :json)
