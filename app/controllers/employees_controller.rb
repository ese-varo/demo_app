class EmployeesController < ApplicationController
  before_action :get_branch
  before_action :set_employee, only: [:show, :edit, :update, :destroy]

  def index
    @employees = @branch.employees
  end

  def show
  end

  def new
    @employee = Employee.new
  end

  def edit
  end

  def create
    # @employee = Employee.new(employee_params)
    @employee = @branch.employees.build(branch_params)

    respond_to do |format|
      if @employee.save
        # format.html { redirect_to @employee, notice: 'Employee was successfully created.' }
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
        # format.html { redirect_to @employee, notice: 'Employee was successfully updated.' }
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
      # format.html { redirect_to employees_url, notice: 'Employee was successfully destroyed.' }
      format.html { redirect_to branch_employees_path(@branch), notice: 'Employee was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

    def get_branch
      @branch = Branch.find(params[:branch_id])
    end

    def set_employee
      @employee = @branch.employees.find(params[:id])
    end

    def employee_params
      params.require(:employee).permit(
        :first_name, :maiden_name, :last_name, :rfc, :position, :branch, :branch_id
      )
    end
end
