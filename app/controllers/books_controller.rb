class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def new
    Book.new
  end

  def create
    book = Book.create(book_params)
  end

  def update
    book = Book.find(params[:id])
    chapter = Chapter.find(params[:id])
    respond_to do |format|
    if book.update(book_params)
      format.html { redirect_to "books/#{book.id}/chapters/#{chapter.id}", notice: 'Project was successfully updated.' }
      format.json { render json: Book.all }
    else
      format.html { render :edit }
      format.json { render json: book.errors, status: :unprocessable_entity }
    end
  end

private
  def book_params
    params.require(:book).permit(
      :title,
      :landscape_type,
      :family_type,
      :food,
      :girl_name,
      :house_type,
      :food_description_one,
      :food_description_two,
      :seat_type,
      :bed_type
    )
  end
end
