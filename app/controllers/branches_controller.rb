class BranchesController < ApplicationController
  before_action :set_branch, only: %i[show edit update destroy]

  def index
    @branches = current_user.branches
  end

  def show
  end

  def new
    @branch = current_user.branches.build
  end

  def edit
  end

  def create
    @branch = current_user.branches.build(branch_params)

    respond_to do |format|
      if @branch.save
        format.html { redirect_to user_branches_path(current_user), notice: 'Branch was successfully created.' }
        format.json { render :show, status: :created, location: @branch }
      else
        format.html { render :new }
        format.json { render json: @branch.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @branch.update(branch_params)
        format.html { redirect_to user_branch_path(current_user), notice: 'Branch was successfully updated.' }
        format.json { render :show, status: :ok, location: @branch }
      else
        format.html { render :edit }
        format.json { render json: @branch.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @branch.destroy
    respond_to do |format|
      format.html { redirect_to user_branches_path(current_user), notice: 'Branch was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_branch
      @branch = current_user.branches.find(params[:id])
    end

    def branch_params
      params.require(:branch).permit(
        :name, :street, :neighborhood, :street_number,
        :apartment_number, :zip_code, :city, :country
      )
    end
end
