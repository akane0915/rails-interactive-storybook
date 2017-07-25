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
      },
      { number: 2,
        title: "Chapter 2",
      },
      { number: 3,
        title: "Chapter 3",
      },
      { number: 4,
        title: "Chapter 4",
      },
      { number: 5,
        title: "Chapter 5",
      },
      { number: 6,
        title: "Chapter 6",
      }
    ])
    puts "Generated #{Book.count} books"
    puts "Generated #{Chapter.count} chapters"
  end
end

Seed.begin
