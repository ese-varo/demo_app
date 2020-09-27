class EmployeesController < ApplicationController
  # before_action :get_branch, only: %i[show edit update destroy]
  before_action :get_branch, except: :new
  before_action :set_employee, only: %i[show edit update destroy]

  def show
  end

  def new
    # @employee = Employee.new
    @employee = current_user.branches.first.employees.build
  end

  def edit
  end

  def create
    # @employee = Employee.new(employee_params)
    # branch = current_user.branches.find_by(name: params[:branch])
    # @employee.branch = Branch.find_by(name: params[:branch])
    # @employee = Employee.new(employee_params)
    
    @employee = get_branch.employees.build(employee_params)

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

    def get_branch
      # @branch = Branch.find(params[:branch_id])
      @branch = Branch.find_by(name: params[:branch])
    end

    def set_employee
      # @employee = @branch.employees.find(params[:id])
    end

    def employee_params
      params.require(:employee).permit(
        :first_name, :maiden_name, :last_name, :rfc, :position, :branch, :branch_id
      )
    end
end
