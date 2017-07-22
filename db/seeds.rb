class Seed

  def self.begin
    seed = Seed.new
    seed.generate_books
  end

  def generate_books
    book = Book.create!(
      title: "Goldilocks and The Three Bears (Or Something Like That...)"
    )

    book.chapters.create!([
      { number: 1,
        title: "Chapter 1",
        text: "test text1"
      },
      { number: 2,
        title: "Chapter 2",
        text: "test text2"
      },
    ])
    puts "Generated #{Book.count} books"
    puts "Generated #{Chapter.count} chapters"
  end
end

Seed.begin
