class EmployeesController < ApplicationController
  before_action :set_employee, only: %i[edit update destroy]
  before_action :get_branch, only: %i[edit update destroy]

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
    branch = Branch.find_by(id: @employee.branch_id)
    @employee.company_branch = branch.name
    respond_to do |format|
      if @employee.save
        format.html { redirect_to edit_branch_path(branch), notice: 'Employee was successfully created.' }
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
        format.html { redirect_to edit_branch_path(@branch), notice: 'Employee was successfully updated.' }
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
      format.html { redirect_to edit_branch_path(@branch), notice: 'Employee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
  
  private

    def get_branch
      @branch = Branch.find_by(id: @employee.branch_id)
    end

    def set_employee
      @employee = Employee.find_by(id: params[:id])
    end

    def employee_params
      params.require(:employee).permit(:first_name, :maiden_name, :last_name, :rfc, :position, :company_branch)
    end
end
