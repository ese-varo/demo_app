class EmployeesController < ApplicationController
  # before_action :get_branch, only: %i[show edit update destroy]
  before_action :get_branch, except: :new
  before_action :set_employee, only: %i[show edit update destroy]
  def show
  end

  def new
    @employee = Employee.new
  end

  def edit
  end

  def create
    @employee = Employee.new(employee_params)
    @employee.branch_id = @employee.company_branch.to_i
    # byebug
    @employee.company_branch = Branch.find_by(id: @employee.branch_id)[:name]
    respond_to do |format|
      if @employee.save
        format.html { redirect_to branch_employees_path(@branch), notice: 'Employee was successfully created.' }
        format.json { render :show, status: :created, location: @employee }
      else
        format.html { render :new }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @employee.update(employee_params)
        format.html { redirect_to branch_employee_path(@branch), notice: 'Employee was successfully updated.' }
        format.json { render :show, status: :ok, location: @employee }
      else
        format.html { render :edit }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @employee.destroy
    respond_to do |format|
      format.html { redirect_to branch_employees_path(@branch), notice: 'Employee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  private

    def get_company_branch
      Branch.find_by(id: @employee.branch_id).name
    end

    def get_branch
      # @branch = Branch.find_by(id: get_branch_id)
    end

    def employee_params
      params.require(:employee).permit(:first_name, :maiden_name, :last_name, :rfc, :position, :company_branch)
    end

    def set_employee
      # @employee = @branch.employees.find(params[:id])
    end
end
