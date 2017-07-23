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
    book.update(book_params)
    redirect_to book_chapter_path(chapter)
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
