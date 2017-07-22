class ChaptersController < ApplicationController
  
  def index
    @book = Book.find(params[:book_id])
    @chapters = Chapter.all
  end

  def show
    @book = Book.find(params[:book_id])
    @chapter = Chapter.find(params[:id])
  end

  def new
    Chapter.new
  end

  def create
    book = Book.find(params[:book_id])
    chapter = book.chapters.new(chapter_params)
    chapter.save
  end

private
  def chapter_params
    params.require(:chapter).permit(
      :number,
      :title,
      :text
    )
  end

end
