class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def create
    book = Book.new(book_params)
    book.save
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
